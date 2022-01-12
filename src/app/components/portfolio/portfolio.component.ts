import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import JobDescJSON from '../../../assets/data/jobdesc.json';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  modalRef?: BsModalRef;
  @ViewChild('template') template !: TemplateRef<any>

  projects = [
    {
      name:'Portfolio Website(this site)',
      role:'Full Stack Developer',
      description:'A personal portfolio website',
      sitelink:'https://github.com/udscrick/PortfolioWebsite_Angular',
      company:'',
      viewsitetext:'View Source Code',
      tools:[
        'angular',
        'sass',
        'html',
        'firebase',
        'bootstrap'
      ]
    },
    {
      name:'Dotadoodle(www.dotadoodle.com)',
      role:'Full Stack Developer/Architect',
      description:'An online magazine.',
      sitelink:'https://dotadoodle.com/',
      company:'',
      viewsitetext:'View Site',
      tools:[
        'node-js',
        'html',
        'firebase',
        'css3',
        'bootstrap',
        'amazonwebservices'
      ]
    },
    {
      name:'R-World',
      role:'Lead UI developer',
      description:'A CMS platform for the employees for Reliance Industries.',
      sitelink:'',
      details:'View Details',
      company:'Reliance Industries Ltd.',
      viewsitetext:'View Site',
      tools:[
        'angular',
        'html',
        'node-js',
        'css3',
        'bootstrap',
        'azure'
      ]
    },
    {
      name:'Food And Beverages',
      role:'Full Stack Developer/Team Lead',
      description:'A portal for the employees of Reliance Industries to order food from partner restaurnts/canteens.',
      sitelink:'',
      details:'View Details',
      company:'Reliance Industries Ltd.',
      viewsitetext:'View Site',
      tools:[
        'angular',
        'html',
        'css3',
        'bootstrap',
        'azure'
      ]
    },
    {
      name:'Conference Room Booking System',
      role:'Web Developer',
      description:'A portal for the employees of Reliance Industries to reserve confrence/meeting rooms',
      sitelink:'',
      details:'View Details',
      company:'Reliance Industries Ltd.',
      viewsitetext:'View Site',
      tools:[
        'angular',
        'html',
        'css3',
        'bootstrap',
        'azure'
      ]
    },
    {
      name:'Carpool',
      role:'Web Developer',
      description:'An application that enables the employees to book vehicles for inter-city/intra-city business related commutes',
      sitelink:'',
      details:'View Details',
      company:'Reliance Industries Ltd.',
      viewsitetext:'View Site',
      tools:[
        'angular',
        'html',
        'css3',
        'bootstrap',
        'google-maps-api',
        'azure'
      ]
    },
    {
      name:'Enterprise Data Automation',
      role:'Full Stack Developer',
      description:'A system to allow automatic allocation of request tickets and asset assignment .',
      sitelink:'',
      details:'View Details',
      company:'Reliance Industries Ltd.',
      viewsitetext:'View Site',
      tools:[
        'angular',
        'html',
        'css3',
        'bootstrap',
        'node-js',
        'azure'
      ]
    },
    {
      name:'Enterprise Gitlab Server',
      role:'Software Developer',
      description:'An enterprise-wide server to host Gitlab to enable version control in projects.',
      sitelink:'',
      details:'View Details',
      company:'Reliance Industries Ltd.',
      viewsitetext:'View Site',
      tools:[
        'gitlab',
        'azure',
        'linux_shell_script'
      ]
    },
    {
      name:'OCR File Reader',
      role:'Software Developer',
      description:'A OCR document reader to digitize the enterprise data/ physical files.',
      sitelink:'',
      details:'View Details',
      company:'Reliance Industries Ltd.',
      viewsitetext:'View Site',
      tools:[
        'r',
        'python',
        
      ]
    },
    {
      name:'Social App',
      role:'MERN Stack Developer',
      description:'A meetup app prototype aimed at connecting people with similar interests.',
      sitelink:'',
      details:'View Details',
      company:'AHY Consultancy',
      viewsitetext:'View Site',
      tools:[
        'reactnative',
        'node-js',
        'mongoDB',
        'express',
        'google-maps-api'
      ]
    },
    {
      name:'E-Commerce App',
      role:'MERN Stack Developer',
      description:'A shopping app prototype to facilitate shopping from different vendors',
      sitelink:'',
      details:'View Details',
      company:'AHY Consultancy',
      viewsitetext:'View Site',
      tools:[
        'reactnative',
        'node-js',
        'mongoDB',
        'express',
        'google-maps-api'
      ]
    },
    {
      name:'VM Network',
      role:'Full-Stack Developer',
      description:'A cloud-based network of VMs to  facilititate Software as Service(SaaS).',
      sitelink:'',
      details:'View Details',
      company:'University Of Mumbai(SIES)',
      viewsitetext:'View Site',
      tools:[
        'linux_shell_script',
        'virtualbox',
        'vmware'
      ]
    },
    {
      name:'Spam Mail Detection',
      role:'College Project',
      description:'An ML based prototype to detect spam emails',
      sitelink:'',
      details:'View Details',
      company:'University Of Mumbai(SIES)',
      viewsitetext:'View Site',
      tools:[
        'python',
        'r',
      ]
    },
    
    {
      name:'Distributed Multiplex Booking System',
      role:'College Project',
      description:'A multiplex movie ticket booking prototype',
      sitelink:'',
      details:'View Details',
      company:'University Of Mumbai(SIES)',
      viewsitetext:'View Site',
      tools:[
        'angular',
        'firebase',
        'mongoDB'
      ]
    },
    {
      name:'Clipboard Utility System',
      role:'College Project',
      description:'A clipboard utility for windows with additional features',
      sitelink:'',
      details:'View Details',
      company:'University Of Mumbai(SIES)',
      viewsitetext:'View Site',
      tools:[
        'python',
        'linux_shell_script'
      ]
    },
    {
      name:'Event Management Website',
      role:'College Project',
      description:'A prototype website for viewing events and requesting event organizers',
      sitelink:'',
      details:'View Details',
      company:'University Of Mumbai(SIES)',
      viewsitetext:'View Site',
      tools:[
        'angular',
        'mysql',
        'php'
      ]
    }
    
  ]

  jobdescriptions:any = JobDescJSON
  modaldetails: any;
  modaltitle: any;
  
  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
  }
  onSiteClick(link:any){
    window.open(link,'_blank')
  }
  onDetailsClick(name:any){
    this.modaltitle = name
    console.log("Name is: ",name)
    this.modalRef = this.modalService.show(this.template);
    let nme = name.replace(/\s/g, "")
    let srchnme = nme.toLowerCase()
    let jobinfo:any = this.jobdescriptions[srchnme]
    console.log("JOB desc JSON: ",jobinfo)
    if(jobinfo){
      this.modaldetails = jobinfo
    }
    else{
      this.modaldetails = {}
    }

  }

}
