import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  projects = [
    {
      name:'Dotadoodle(www.dotadoodle.com)',
      role:'Personal Project(Web Developer/Architect)',
      description:'An online magazine.',
      sitelink:'https://dotadoodle.com/',
      tools:[
        'node-js',
        'html',
        'firebase',
        'css3',
        'bootstrap',
        'amazonwebservices'
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }
  onSiteClick(link:any){
    window.open(link,'_blank')
  }

}
