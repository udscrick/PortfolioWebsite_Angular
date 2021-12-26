import { Component, OnInit } from '@angular/core';
declare var Typewriter:any ;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

   typewriter_text: string = "I am a full stack, cross-platform web and app developer.";
 typewriter_display: string = "";

  constructor() { }

  ngOnInit(): void {
      this.typingCallback(this);
      var app = document.getElementById('desc');

var typewriter = new Typewriter(app, {
  loop: false,
  delay: 75,
});
typewriter
  .pauseFor(2500)
  .typeString(this.typewriter_text)
  .pauseFor(2000)
  .deleteAll()
  .typeString('I make websites and mobile applications that work on all kinds of devices!')
  .start();

// typewriter.stop()

  }

  typingCallback(that:any) {
    let total_length = that.typewriter_text.length;
    let current_length = that.typewriter_display.length;
    if (current_length < total_length) {
      that.typewriter_display += that.typewriter_text[current_length];
      setTimeout(that.typingCallback, 1000, that);
    } else {
      that.typewriter_display = "";
    }
  }

}
