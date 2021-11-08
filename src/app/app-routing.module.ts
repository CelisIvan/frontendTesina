import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { Section1Component } from './section1/section1.component';
import { Section2Component } from './section2/section2.component';
import { Section3Component } from './section3/section3.component';
import { Section4Component } from './section4/section4.component';

const routes: Routes = [
    { path: '', redirectTo: '/disclaimer',pathMatch:'full'},
    { path: 'disclaimer', component: DisclaimerComponent },
    { path: 'eels1', component:Section1Component},
    { path: 'atls2', component:Section2Component },
    { path: 'apasels3', component:Section3Component },
    { path: 'fpvls4', component:Section4Component }

  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  