import {loadingReducer} from "./loadingReducer";
import {LoadingState} from "./loadingState";
import {hide, show} from "./loading.actions";
import {createAction} from "@ngrx/store";

describe('loading state', () => {

  it('show', () => {
    const initialState: LoadingState = {show: false}
    const newState = loadingReducer(initialState, show)
    expect(newState).toEqual({show: true})
  })

  it('hide', () => {
    const initialState: LoadingState = {show: true}
    const newState = loadingReducer(initialState, hide)
    expect(newState).toEqual({show: false})
  })

  it('should not change state if an action is unknown', () => {
    const initialState: LoadingState = {show: true}
    const unknownAction = createAction('UNKNOWN')
    const newState = loadingReducer(initialState, unknownAction)
    expect(newState).toEqual({show: true})
  })

})
