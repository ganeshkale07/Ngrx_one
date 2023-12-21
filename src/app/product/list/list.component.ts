import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  showProductCode: any;
  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    this.store.select('products').subscribe((productState) => {
      alert('Hi');
      this.showProductCode = productState.showProductCode;
    });
  }

  toggleCheckbox() {
    this.store.dispatch({ type: '[Product] toggleProdCode' });
  }
}
