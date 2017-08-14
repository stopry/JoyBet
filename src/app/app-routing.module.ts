import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {LoginComponent} from  './loginRegist/login.component'
import {RegistComponent} from  './loginRegist/regist.component'

const appRoutes:Routes = [
  //{
  //  path:'logIn',//登陆界面
  //  component:LoginComponent
  //},
  {
    path:'regist',//注册界面
    component:RegistComponent
  },
  {//游戏模块
    path: 'main',
    loadChildren: './main/main.module#MainModule',
    //data: { preload: true }
  },
  {
    path:'', //空
    redirectTo: '/logIn',
    pathMatch: 'full'
  },
];

@NgModule({
  imports:[
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true, // <-- debugging purposes only
      }
    )
  ],
  exports:[
    RouterModule
  ],
  providers:[

  ]
})
export class AppRoutingModule{

}

