import { Item } from './item';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-list';

  filter: "all" | "active" | "done" = "all";

  listItems: Item[] = [];

  get items() {
    if (this.filter === "all") {
      return this.listItems;
    }
    return this.listItems.filter((item) =>
      this.filter === "done" ? item.done : !item.done
    );
  }

  addItem(description: string) {
    this.listItems.unshift({
      description,
      done: false
    })
  }

  remove(item: Item) {
    this.listItems.splice(this.listItems.indexOf(item), 1)
  }
}
