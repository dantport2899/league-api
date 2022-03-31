import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'biography',
  templateUrl: './biography.component.html',
  styleUrls: ['./biography.component.css']
})
export class BiographyComponent implements OnInit {
  @Input() championname!: string;
  @Input() championinfo!: any;


  constructor() { }

  ngOnInit(): void {
  }

}
