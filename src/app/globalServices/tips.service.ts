import {Injectable} from '@angular/core';

@Injectable()

export class TipsService{
  constructor(){

  }
  _alert(msg):void {
    let timer = null;
    $('#alertWeek').remove();
    let $alert = $('<div class="week-alert" id="alertWeek"></div>');
    $('body').append($alert);
    $alert.html(msg||'空');
    $alert.addClass('alert-show');
    clearTimeout(timer);
    timer = setTimeout(() => {
      $alert.remove();
    }, 2000);
  }
}
