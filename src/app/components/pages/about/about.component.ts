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
  showResumeButton: boolean = false;

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
  .typeString('I make websites and mobile apps that work on all kinds of devices!')
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
  onViewClick(val:any){
    window.open('assets/pdf/uday_menon_cv.pdf')

  }
  onSocialsClick(val:string){
    if(val=='l'){
      window.open('https://www.linkedin.com/in/udayvmenon/')
    }
    if(val=='g'){
      window.open('https://github.com/udscrick')
    }
    if(val=='f'){
      window.open('https://www.facebook.com/killerinstinct95/')
    }
  }

}
