import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';  //servicios para rutas con parametros
import * as $ from "jquery";

@Component({
  selector: 'skins',
  templateUrl: './skins.component.html',
  styleUrls: ['./skins.component.css']
})
export class SkinsComponent implements OnInit {
  // routerSubscription: any;
  
  // data = [
  //   { img: "https://therichpost.com/wp-content/uploads/2021/05/bootstrap5-carousel-slider-img1.jpg", title: "Slide 1" },
  //   { img: "https://therichpost.com/wp-content/uploads/2021/05/bootstrap5-carousel-slider-img2.jpg", title: "Slide 2" },
  //   { img: "https://therichpost.com/wp-content/uploads/2021/05/bootstrap5-carousel-slider-img3.jpg", title: "Slide 3" }
  // ];

  //  urlJquery = "../../../../../../node_modules/jquery/dist/jquery.min.js";
  //  urlslider = "../../../../../assets/bxslider-4-4.2.12/dist/jquery.bxslider.min.js";
  
  @Input() championname!: string;
  @Input() championskins!: any;
  constructor(
    // private elRef: ElementRef
  ) { }

  ngOnInit(): void {

    //  $.getScript(this.urlJquery);
    //  $.getScript(this.urlslider);
    // // do rest of your stuff here.

    // ($('.bxslider')as any).bxSlider({
    //   mode: 'fade',
    //   captions: true 
    // });
    console.log(this.championskins);
   
  }
  // observer: MutationObserver | undefined;

  // ngAfterViewInit(){
    // this.observer = new MutationObserver(mutations => {
      
    //   console.log('Dom change detected...');
    //   $.getScript(this.urlJquery); 
    //   $.getScript(this.urlslider);
     //Add path to your custom js file

  //   });
  //   var config = { attributes: true, childList: true, characterData: true };

  //   this.observer.observe(this.elRef.nativeElement, config);
  // }



}
