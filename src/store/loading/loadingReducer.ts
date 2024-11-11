import {createReducer, on} from "@ngrx/store";
import {hide, show} from "./loading.actions";
import {LoadingState} from "./loadingState";
import {ActionCreator} from "@ngrx/store/src/models";

const initialState: LoadingState = {
  show: false
}

const reducer = createReducer(
  initialState,
  on(show, () => {
    return { show: true }
  }),
  on(hide, () => {
    return { show: false }
  })
);

export function loadingReducer(state: LoadingState, action: ActionCreator) {
  return reducer(state, action)
}
