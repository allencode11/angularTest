import { Component, OnInit } from '@angular/core';
import { Item } from '../types';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  items: Item[] = [
    {name: "Johny Montana", priority: 5000},
    {name: "James Adam", priority: 100},
    {name: "Lowis Panini", priority: 3500},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
