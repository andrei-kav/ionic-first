import {StoreModule} from "@ngrx/store";
import {loadingReducer} from "./loading/loadingReducer";

export const AppStoreModule = [
  StoreModule.forRoot([]),
  StoreModule.forFeature('loading', loadingReducer)
]
