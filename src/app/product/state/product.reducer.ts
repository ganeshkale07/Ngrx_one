import { createAction, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import * as AppState from '../../app.state';

export interface State extends AppState.State{
  products : productState
}

//strongly type productFeature state
export interface productState {
  showProductCode : boolean
}

//when application load very first time it should know what is bydefault state value 
//that is why initialstate needed
const initialState = {
  showProductCode : true
}

//creating feature selectors
const getProductStateSelector = createFeatureSelector<productState>('products');

//creating specific selector
//to decouple dependency of component 
//we don't have to update component.ts file
export const getShowProductCode = createSelector(getProductStateSelector, (state) => state.showProductCode)

//reducer function return state of feature state
export const productReducer = createReducer<productState>(
  initialState,
  on(createAction('[Product] toggleProdCode'), (state:productState) : productState => {
    return {
      ...state,
      showProductCode: !state.showProductCode,
    };
  })
);
