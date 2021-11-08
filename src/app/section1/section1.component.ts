import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.css']
})
export class Section1Component implements OnInit {

  constructor() { }
  current: number = Date.now()
  ngOnInit(): void {
    console.log(this.current)
  }
  
}
