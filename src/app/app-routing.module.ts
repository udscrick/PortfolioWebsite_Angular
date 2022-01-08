import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperienceComponent } from './components/experience/experience.component';
import { AboutComponent } from './components/pages/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'skills',
    component:SkillsComponent
  },
  {
    path:'home',
    component:AboutComponent
  },
  {
    path:'experience',
    component:ExperienceComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
