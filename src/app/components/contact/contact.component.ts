import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Firestore, collectionData, collection,addDoc } from '@angular/fire/firestore';
import { onSnapshot } from 'firebase/firestore';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm:FormGroup = new FormGroup({});
  constructor(private http:HttpClient,private angularFiredb:Firestore) { }

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
    const fbcollection = collection(this.angularFiredb, 'messages'); 
   addDoc(fbcollection,{
    name:this.contactForm.controls['name'].value,
      email: this.contactForm.controls['email'].value,
      subject: this.contactForm.controls['subject'].value,
      message:this.contactForm.controls['message'].value
   })
    // fbcollection.
    // this.angularFiredb.collection('contactmessages').add({
    //   name:this.contactForm.controls['name'].value,
    //   email: this.contactForm.controls['email'].value,
    //   subject: this.contactForm.controls['subject'].value,
    //   message:this.contactForm.controls['message'].value

    // })
   
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
// https://script.google.com/macros/s/AKfycbx-s5HHxvoUrv7Fp_OBUfpO5el7wttjLTUXXp8R/exec