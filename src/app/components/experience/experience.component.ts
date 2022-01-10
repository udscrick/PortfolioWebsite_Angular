import { animate, group, query, sequence, stagger, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  animations:[
trigger('fadeSlideInOut', [
	transition(':enter', [
    query(':enter',[
      style({ opacity: 0, transform: 'translateY(10px)' }),
      stagger('100ms',[
        animate('500ms', style({ opacity: 1, transform: 'translateY(0)' })),
      ])
		
    ])
		
	]),
	// transition(':leave', [
	// 	animate('500ms', style({ opacity: 0, transform: 'translateY(10px)' })),
	// ]),
]),
trigger('fadeInGrow', [
  transition(':enter', [
      query(':enter', [
          style({ opacity: 0}),
          stagger('50ms',[
              animate('500ms', style({ opacity: 1 })),
              // animate('200ms ease-in', style({ transform: 'scale(1)' }))
          ])
      ])
  ])
])
  ]
})
export class ExperienceComponent implements OnInit {
  activetabcontent: string = 'edu';
  shown='hover'
  education = [ {
    title: 'Computer Engineering',
    place: 'University Of Mumbai',
    fromyear:2014,
    toyear:2018
  },
  {
    title: '12th',
    place: 'Amrita Vidyalayam',
    fromyear:2012,
    toyear:2014
  },
  {
    title: '10th',
    place: 'Northpoint High School(ICSE)',
    fromyear:2010,
    toyear:2012
  }]
  workexperiences = [{
    title: 'UI/UX Team Lead',
    place: 'Jio Infocomm',
    fromyear:2020,
    toyear:'present'
  },
  {
    title: 'Senior Software Developer',
    place: 'Reliance Industries Limited',
    fromyear:2019,
    toyear:2020
  },
  {
    title: 'Software Developer',
    place: 'Reliance Industries Limited',
    fromyear:2018,
    toyear:2019
  },
  {
    title: 'Graduate Engineering Trainee',
    place: 'Reliance Industries Limited',
    fromyear:2018,
    toyear:''
  },
  {
    title: 'MERN Stack Developer(Intern)',
    place: 'AHY Consultancy',
    fromyear:2017,
    toyear:''
  },]

  constructor() { }

  ngOnInit(): void {
  }

  onShowContent(type:string){
    this.activetabcontent = type
  }

}
