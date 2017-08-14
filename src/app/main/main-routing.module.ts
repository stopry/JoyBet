import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AuthGuard} from '../globalServices/auth-guard.service'

import {MainComponent} from './main.component'


const mainRoutes:Routes=[
  {
    path:'',
    component:MainComponent,
    canActivate:[AuthGuard],
    //children:[
    //  {
    //
    //  }
    //]
  }
];

@NgModule({
  imports:[
    RouterModule.forChild(mainRoutes)
  ],
  exports:[
    RouterModule
  ]
})

export class MainRoutingModule{}
