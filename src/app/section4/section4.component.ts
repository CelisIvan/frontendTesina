import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-section4',
  templateUrl: './section4.component.html',
  styleUrls: ['./section4.component.css']
})
export class Section4Component implements OnInit, AfterViewInit, OnDestroy{

  @ViewChild('demoYouTubePlayer') demoYouTubePlayer: ElementRef<HTMLDivElement> | undefined;
      videoWidth: number | undefined;
      videoHeight: number | undefined;
 
  constructor(private _changeDetectorRef: ChangeDetectorRef) { }
  
 
  ngOnInit(): void {
    const tag = document.createElement('script');
 
  	tag.src = "https://www.youtube.com/iframe_api";
 
  	document.body.appendChild(tag);
  }
  ngAfterViewInit(): void {
    this.onResize();
    window.addEventListener('resize', this.onResize);
  }
  onResize = (): void => {
    // Automatically expand the video to fit the page up to 1200px x 720px
    this.videoWidth = Math.min(this.demoYouTubePlayer!.nativeElement.clientWidth, 1200);
    this.videoHeight = this.videoWidth * 0.6;
    this._changeDetectorRef.detectChanges();
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.onResize);
  }

}
