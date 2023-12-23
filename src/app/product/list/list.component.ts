import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State, getShowProductCode } from "../state/product.reducer";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  showProductCode: any;
  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.store.select(getShowProductCode).subscribe((showProductCode) => {
      this.showProductCode = showProductCode;
    });
  }

  toggleCheckbox() {
    this.store.dispatch({ type: '[Product] toggleProdCode' });
  }
}
