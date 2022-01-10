import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm:FormGroup = new FormGroup({});
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      subject: new FormControl(),
      message: new FormControl()
    })
  }
  onClickSend(){
    console.log("Form values: ",this.contactForm.value)
    let formData = new FormData()
    formData.append('name',this.contactForm.controls['name'].value)
    formData.append('email',this.contactForm.controls['email'].value)
    formData.append('subject',this.contactForm.controls['subject'].value)
    formData.append('message',this.contactForm.controls['message'].value)
    this.http.post('https://script.google.com/macros/s/AKfycbx-s5HHxvoUrv7Fp_OBUfpO5el7wttjLTUXXp8R/exec',formData).subscribe((response:any)=>{
      console.log("Http response is: ",response)
    },(error:any)=>{
      console.log("Http error is: ",error)
    })
  }

}
// https://script.google.com/macros/s/AKfycbx-s5HHxvoUrv7Fp_OBUfpO5el7wttjLTUXXp8R/exec