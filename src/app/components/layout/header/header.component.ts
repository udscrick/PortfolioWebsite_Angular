import { Component, OnInit } from '@angular/core';
// import * as $ from 'jquery'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // $('document').ready(function () {
    //   var trigger = $('#hamburger'),
    //       isClosed = true;
  
    //   trigger.click(function () {
    //     burgerTime();
    //   });
  
    //   function burgerTime() {
    //     if (isClosed == true) {
    //       trigger.removeClass('is-open');
    //       trigger.addClass('is-closed');
    //       isClosed = false;
    //     } else {
    //       trigger.removeClass('is-closed');
    //       trigger.addClass('is-open');
    //       isClosed = true;
    //     }
    //   }
  
    // });
  }

}
