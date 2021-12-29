import { Component, OnInit } from '@angular/core';
import { event } from 'jquery';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skillsContent:any;
  skillHeader:any;
  skills = [
    {
      name: "Programming Languages",
      iconclass:'uil-programming-language',
      subskills:[
        {
          name:"Javascript",
          level: "90%"
        },
        {
          name:"Python",
          level: "80%"
        },
        {
          name:"Java",
          level: "80%"
        },
        {
          name:"Dart",
          level: "80%"
        },
        {
          name:"C",
          level: "80%"
        }
      ]
    },
    {
      name: "Frontend Technologies",
      iconclass:'uil-brackets-curly',
      subskills:[
        {
          name:"Angular",
          level: "95%"
        },
        {
          name:'React',
          level:"80%"
        },
        {
          name:"Flutter",
          level: "85%"
        },
        {
          name:"React Native",
          level: "80%"
        },
        {
          name:"HTML",
          level: "95%"
        },
        {
          name:"CSS",
          level: "85%"
        },
        {
          name:"Bootstrap",
          level: "90%"
        },
        {
          name:"Redux",
          level: "80%"
        }
      ]
    },
    {
      name: "Backend Technologies",
      iconclass:'uil-server',
      subskills:[
        {
          name:"NodeJS",
          level: "75%"
        },
        {
          name:"Firebase",
          level: "95%"
        },
        {
          name:"Mongo",
          level: "80%"
        },
        {
          name:"SQL",
          level:"90%"
        }
        
      ]
    },
    {
      name: "Design",
      iconclass:'uil-palette',
      subskills:[
        {
          name:"AdobeXD",
          level: "75%"
        },
        {
          name:"Figma",
          level: "70%"
        },
        {
          name:"Photoshop",
          level:"65%"
        }
        
      ]
    },
    {
      name: "Other Skills",
      iconclass:'uil-asterisk',
      subskills:[
        {
          name:"DevOps",
          level: "75%"
        },
        {
          name:"MS Office",
          level: "70%"
        },
        {
          name:"Domain Driven Design",
          level: "80%"
        },
        {
          name:"Agile Software Development",
          level:"90%"
        },
        {
          name:"Kubernetes",
          level:"70%"
        },
        {
          name:"Docker",
          level:"70%"
        },
        {
          name:"Kafka",
          level:"70%"
        },
        {
          name:"PowerPoint",
          level: "95%"
        },
      ]
    }
  ]
  constructor() { }

  ngOnInit(): void {
  this.skillsContent = document.getElementsByClassName('skills_content')
    this.skillHeader = document.querySelectorAll('.skills_header')
  }

  toggleSkills(evnt:any){
    this.skillsContent = document.getElementsByClassName('skills_content')
    this.skillHeader = document.querySelectorAll('.skills_header')
    console.log("Toggle Val: ",evnt.target.attributes.class)
    let itemsclass
    for(let i = 0;i<this.skillsContent.length;i++){
      if(this.skillsContent[i].className = 'skills_content skills_close'){
        this.skillsContent[i].className = 'skills_content skills_open'
      }
      else{
        this.skillsContent[i].className = 'skills_content skills_close'
      }
     
    }
    // if(itemsclass == 'skills_content skills_close')
  }
  

}
