import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';//表单模块

import {MainRoutingModule} from './main-routing.module'

import {MainComponent} from './main.component';

import {EchartsNg2Module} from 'echarts-ng2';//echarts模块

import {VoteListService} from "../globalServices/vote-list.service";//得到投票列表数据服务

import {VoteIndexComponent} from '../globalComponent/vote-index.component';//投票指数组件
import {VoteListComponent} from '../globalComponent/vote-list.component';//投票列表组件

//垂直居中指令
import {VerticalCenterDirective} from '../directive/vertical-center.directive';

@NgModule({
  imports:[
    CommonModule,
    FormsModule,
    MainRoutingModule,
    EchartsNg2Module
  ],
  declarations:[
    MainComponent,
    VoteIndexComponent,
    VoteListComponent,
    VerticalCenterDirective
  ],
  providers:[
    VoteListService
  ]
})

export class MainModule{

}
