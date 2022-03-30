import { Component, OnInit , Input, Output} from '@angular/core';

@Component({
  selector: 'spells',
  templateUrl: './spells.component.html',
  styleUrls: ['./spells.component.css']
})
export class SpellsComponent implements OnInit {
  @Input() championspells!: any;

  constructor() { }

  ngOnInit(): void {
  }

}
