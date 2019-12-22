import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//1.- Importar componente

//*Import components
import { NavbarUserComponent } from './components/user/shared/navbar-user/navbar-user.component';
import { ProfileUserComponent } from './components/user/profile/profile-user/profile-user.component';
import { EditprofileUserComponent } from './components/user/profile/editprofile-user/editprofile-user.component';
import { CreaterecipeUserComponent } from './components/user/recipes/createrecipe-user/createrecipe-user.component';
import { EditrecipeUserComponent } from './components/user/recipes/editrecipe-user/editrecipe-user.component';
import { HomeUserComponent } from './components/user/home-user/home-user.component';

import { NavbarGuestComponent } from './components/guest/navbar-guest/navbar-guest.component';
import { HomeGuestComponent } from './components/guest/home-guest/home-guest.component';
import { SearchrecipeGuestComponent } from './components/guest/searchrecipe-guest/searchrecipe-guest.component';
import { SearchresultsGuestComponent } from './components/guest/searchresults-guest/searchresults-guest.component';
import { CategoriesGuestComponent } from './components/guest/categories-guest/categories-guest.component';
import { LoginComponent } from './components/guest/login-guest/login.component';
import { SignupGuestComponent } from './components/guest/signup-guest/signup-guest.component';
import { ForgotpasswordGuestComponent } from './components/guest/forgotpassword-guest/forgotpassword-guest.component';

import { HomeAdminComponent } from './components/admin/home-admin/home-admin.component';
import { NavbarAdminComponent } from './components/admin/navbar-admin/navbar-admin.component';
import { IngredientsAdminComponent } from './components/admin/ingredients/ingredients-admin/ingredients-admin.component';
import { CreateingredientsAdminComponent } from './components/admin/ingredients/createingredients-admin/createingredients-admin.component';
import { EditingredientsAdminComponent } from './components/admin/ingredients/editingredients-admin/editingredients-admin.component';
import { CategoriesAdminComponent } from './components/admin/categories/categories-admin/categories-admin.component';
import { CreatecategoriesAdminComponent } from './components/admin/categories/createcategories-admin/createcategories-admin.component';
import { EditcategoriesAdminComponent } from './components/admin/categories/editcategories-admin/editcategories-admin.component';
import { UsersAdminComponent } from './components/admin/users/users-admin/users-admin.component';
import { CreatetagsAdminComponent } from './components/admin/tags/createtags-admin/createtags-admin.component';
import { EditusersAdminComponent } from './components/admin/users/editusers-admin/editusers-admin.component';
import { TagsAdminComponent } from './components/admin/tags/tags-admin/tags-admin.component';
import { EdittagsAdminComponent } from './components/admin/tags/edittags-admin/edittags-admin.component';
import { RecipeComponent } from './components/shared/recipe/recipe.component';


//2.- Asignar ruta al componente
//mipagina.com/path/path/path
const routes: Routes = [
 
 
  //*User routes
  {component: NavbarUserComponent, path: 'user/navbar-user'},
  {component: ProfileUserComponent, path: 'user/profile-user'},
  {component: EditprofileUserComponent, path: 'user/editprofile-user'},
  {component: CreaterecipeUserComponent, path: 'user/createrecipe'},
  {component: EditrecipeUserComponent, path: 'user/editrecipe-user'},
  {component: HomeUserComponent, path: 'user/home'},

  //*Guest routes
  {component: NavbarGuestComponent, path: 'guest/navbar-guest'},
  {component: HomeGuestComponent, path: 'home'},
  {component: SearchrecipeGuestComponent, path: 'searchrecipe-guest'},
  {component: SearchresultsGuestComponent, path: 'searchresults-guest'},
  {component: CategoriesGuestComponent, path: 'guest/categories-guest'},
  {component: LoginComponent, path: 'guest/login-guest'},
  {component: SignupGuestComponent, path: 'guest/signup-guest'},
  {component: ForgotpasswordGuestComponent, path: 'guest/forgotpassword-guest'},
  {component: RecipeComponent, path: 'recipe/:id'},

  //*Admin routes
  {component: HomeAdminComponent, path: 'admin/home-admin'},
  {component: IngredientsAdminComponent, path: 'admin/ingredients-admin'},
  {component: CreateingredientsAdminComponent, path: 'admin/createingredients-admin'},
  {component: EditingredientsAdminComponent, path: 'admin/editingredient-admin'},
  {component: CategoriesAdminComponent, path: 'admin/categories-admin'},
  {component: CreatecategoriesAdminComponent, path: 'admin/createcategories-admin'},
  {component: EditcategoriesAdminComponent, path: 'admin/editcategories-admin'},
  {component: UsersAdminComponent, path: 'admin/user-admin'},
  {component: CreatetagsAdminComponent, path: 'admin/createtags-admin'},
  {component: EditusersAdminComponent, path: 'admin/edituser-admin'},
  {component: TagsAdminComponent, path: 'admin/tags-admin'},
  {component: EdittagsAdminComponent, path: 'admin/edit-admin'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
