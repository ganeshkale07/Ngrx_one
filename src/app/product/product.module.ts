import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { productReducer } from './state/product.reducer';
import { RouterModule } from '@angular/router';
import { EditComponent } from './edit/edit.component';
//Store module
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [ListComponent, EditComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ListComponent,
      },
      {
        path: 'edit',
        component: EditComponent,
      },
    ]),
    //To use store in product featureModule
    //product feature Module slice - "products"
    StoreModule.forFeature('products', productReducer),
  ],
})
export class ProductModule {}
