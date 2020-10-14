import { StateType } from './login';

export interface Loading { 
  global: boolean;
  effects: { [key: string]: boolean | undefined };
  models: {
    login ?: boolean
  }
}

export interface ConnectState {
  login: StateType;
  loading: Loading
}
