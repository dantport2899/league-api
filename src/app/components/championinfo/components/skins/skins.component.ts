import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'skins',
  templateUrl: './skins.component.html',
  styleUrls: ['./skins.component.css']
})
export class SkinsComponent implements OnInit {
  @Input() championname!: string;
  @Input() championskins!: any;
  constructor() { }

  ngOnInit(): void {
  }

}
