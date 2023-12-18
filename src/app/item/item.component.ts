import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})

export class ItemComponent implements OnInit {

  editable = false;

  @Input() item!: Item;
  @Output() remove = new EventEmitter<Item>();

  constructor() { }

  ngOnInit(): void {
  }

  saveItem(description: string) {
    if (!description) return
    this.editable = false
    this.item.description = description
  }
}
