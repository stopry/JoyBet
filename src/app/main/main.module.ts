import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import {MainRoutingModule} from './main-routing.module'

import {MainComponent} from './main.component';

import {EchartsNg2Module} from 'echarts-ng2';//echarts模块

import {VoteIndexComponent} from '../globalComponent/vote-index.component';//投票指数组件
import {VoteListComponent} from '../globalComponent/vote-list.component';//投票列表组件

import {VerticalCenterDirective} from '../directive/vertical-center.directive';//垂直居中指令


@NgModule({
  imports:[
    CommonModule,
    MainRoutingModule,
    EchartsNg2Module
  ],
  declarations:[
    MainComponent,
    VoteIndexComponent,
    VoteListComponent,
    VerticalCenterDirective
  ]
})

export class MainModule{

}
