import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const INITIAL_STATE_FORM_ED: State = {
  visibility: false,
};
const INITIAL_STATE_FORM_SK: State = {
  visibility: false,
};
const CONTENT_FORM: Object = {
  data: {},
};
@Injectable({
  providedIn: 'root',
})
export class EstadosUIService {
  private _stateEd = new BehaviorSubject<State>(INITIAL_STATE_FORM_ED);
  private _stateSk = new BehaviorSubject<State>(INITIAL_STATE_FORM_SK);
  private _stateContentForm = new BehaviorSubject<Object>(CONTENT_FORM);
  stateFE = this._stateEd.asObservable();
  stateSK = this._stateSk.asObservable();
  contentForm = this._stateContentForm;
  constructor() {}

  changeStateFormEd(newState: boolean) {
    const oldState = this._stateEd.getValue();
    this._stateEd.next({ ...oldState, visibility: newState });
  }
  changeStateFormSkill(newState: boolean) {
    const oldState = this._stateSk.getValue();
    this._stateSk.next({ ...oldState, visibility: newState });
  }
}

export interface State {
  visibility: boolean;
}
