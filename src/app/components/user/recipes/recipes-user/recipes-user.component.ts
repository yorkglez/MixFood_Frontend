import { Component, OnInit } from '@angular/core';
import { RecipesService,RecipeCardTable,Status } from 'src/app/services/recipes.service';
import { empty } from 'rxjs';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';
import  Swal  from 'sweetalert2';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-recipes-user',
  templateUrl: './recipes-user.component.html',
  styleUrls: ['./recipes-user.component.css']
})
export class RecipesUserComponent implements OnInit {
  //*Objects declaration
  private recipes: RecipeCardTable[] =  [];
  
  //*Variables declaration
  private idUser = this._authService.user.id;
  private itemsPerPage = 10;
  private totalItems: number = 0;
  private currentPage = 1;
  private totalPages: number;
  private status: string = 'public';
  private message: string;
  private term: string = '';
  private isResultEmpty: boolean = false;

  constructor(private _recipeService: RecipesService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private _authService: AuthService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params =>{
      console.log(params.get('page'));
      if(params.get('page') == undefined)
      {
        this.getRecipes(0);
      }
      else if(params.get('term') != undefined)
      {
        this.term = params.get('term');
        this.currentPage = Number(params.get('page'));
        this.getRecipesByName(this.term,this.currentPage-1);
      }
      else 
      {
        this.currentPage = Number(params.get('page'));
        this.status = params.get('status');
        this.getRecipes(this.currentPage-1);
      }
    });
  }

  private getRecipes(page: number):void{
    this._recipeService.getRecipesCardsTable(this.idUser,this.status,page,this.itemsPerPage).subscribe(response =>
    {
      if(response.empty)
      {

      }
      else
      {
        console.log(response.number);
        this.recipes = response.content as RecipeCardTable[];
        this.totalItems = response.totalElements;
      
        //*Get current page of results 
        this.currentPage = response.number + 1;
        this.totalPages = response.totalPages;
      }
    },
    err =>
    {
      console.log(err);
    });
  }

  /**
   **This function get the next page and show in the front 
   * @param page 
   */
  public getPage(page: number):void
  {
    let url; 
    if(this.term != '')
    {
      this.getRecipesByName(this.term,page-1);
    }
    else
    {
      this.getRecipes(page-1);
    }
  }

  private goToEdit(id: number): void
  {
    this.router.navigate(['user/recipes/edit/',id])
  }

  private getByStatus():void
  {
    this.getRecipes(0);
  }

  private searchRecipes(term)
  {
    this.term = term;
    this.getRecipesByName(term,0);
  }

  /**
   **This function get recipes by term
   * @param term 
   * @param page 
   */
  private getRecipesByName(term: string, page: number):void
  {{
    this._recipeService.getRecipesCardsTableByName(this.idUser,this.status,term,page,this.itemsPerPage).subscribe(response=>{
      if(response.empty)
      {
        this.isResultEmpty = true;
        this.totalItems = 0;
        this.recipes = [];
      }
      else
      {
        this.recipes = response.content as RecipeCardTable[];
        this.totalItems = response.totalElements;
        this.isResultEmpty = false;
        //*Get current page of results 
        this.currentPage = response.number + 1;
        this.totalPages = response.totalPages;
      }
    },
    err =>{
      console.log(err);
    })
  }}

  private removeRecipe(id: number, index): void
  {
    Swal.fire({
      title: 'Are you sure you want to delete this recipe?',
      text: '',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
    })
    .then((result) =>{
      if(result.value)
      {
        this._recipeService.removeRecipe(id).subscribe(response =>
          {
            console.log(response);
            this.recipes.splice(index,1);        
          },
          err =>
          {
            console.log(err);
          }
          );
      }
    });       
  }

}
