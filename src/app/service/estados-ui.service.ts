import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

const INITIAL_STATE_FORM_ED: State = {
  visibility: false,
};
const INITIAL_STATE_FORM_SK: State = {
  visibility: false,
};
const INITIAL_STATE_FORM_EXP: State = {
  visibility: false,
};
const INITIAL_STATE_FORM_PROJECT: State = {
  visibility: false,
};

@Injectable({
  providedIn: 'root',
})
export class EstadosUIService {
  private _stateEd = new BehaviorSubject<State>(INITIAL_STATE_FORM_ED);
  private _stateSk = new BehaviorSubject<State>(INITIAL_STATE_FORM_SK);
  private _stateExp = new BehaviorSubject<State>(INITIAL_STATE_FORM_EXP);
  private _stateProject = new BehaviorSubject<State>(
    INITIAL_STATE_FORM_PROJECT
  );
  private toastSubject = new Subject();

  toast$ = this.toastSubject.asObservable();
  stateFE = this._stateEd.asObservable();
  stateSK = this._stateSk.asObservable();
  stateExp = this._stateExp.asObservable();
  stateProject = this._stateProject.asObservable();

  constructor() { }
  
  changeStateFormExp(newState: boolean) {
    const oldState = this._stateExp.getValue();
    this._stateExp.next({ ...oldState, visibility: newState });
  }
  changeStateProject(newState: boolean) {
    const oldState = this._stateProject.getValue();
    this._stateProject.next({ ...oldState, visibility: newState });
  }
  changeStateFormEd(newState: boolean) {
    const oldState = this._stateEd.getValue();
    this._stateEd.next({ ...oldState, visibility: newState });
  }
  changeStateFormSkill(newState: boolean) {
    const oldState = this._stateSk.getValue();
    this._stateSk.next({ ...oldState, visibility: newState });
  }
  showToast(msg: string) {
    this.toastSubject.next(msg);
  }
}

export interface State {
  visibility: boolean;
}
