import { Action } from '@ngrx/store';
import { Exercise } from './exercise.model';
export const SET_AVAILABLE_TRAININGS = '[Training] Set Available Training';
export const SET_FINISHED_TRAININGS = '[Training] Set Finished Training';
export const START_TRAINING = '[Training] Start Training';
export const STOP_TRAINING = '[Training] Stop Training';

export class SetAvailableTrainings implements Action {
  type: string = SET_AVAILABLE_TRAININGS;
  constructor(public payload: Exercise[]) {}
}

export class SetFinishedTrainings implements Action {
  type: string = SET_FINISHED_TRAININGS;
  constructor(public payload: Exercise[]) {}
}

export class StartTraining implements Action {
  type: string = START_TRAINING;
  constructor(public payload: string) {}
}

export class StopTraining implements Action {
  type: string = STOP_TRAINING;
  constructor(public payload: any) {}
}

export type TrainingActions =
  | SetAvailableTrainings
  | SetFinishedTrainings
  | StartTraining
  | StopTraining;
