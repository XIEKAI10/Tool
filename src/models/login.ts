import { message } from "antd";
import { history, Reducer, Effect } from 'umi';


export interface StateType {
  userInfo?: object
}

export interface LoginModelType {
  namespace: string;
  state: StateType;
  effects: {
    submit: Effect;
  };
   reducers: {
    changeSubmit: Reducer<StateType>;
  };
}


const LoginModel: LoginModelType = {
  namespace: 'login',
  state: {
    userInfo: {}
  },
  effects: {
    *submit({ payload }, { call, put }) {
      // const response = yield call(topicBrand, payload)
      if(payload.name === '12345' && payload.password === '12345') {
        yield put({
          type: 'changeSubmit',
          payload: {
            name: 'xk',
            access: 'admin'
          }
        })
      }else {
        message.error('账号错误')
      }
    }
  },
  reducers: {
    changeSubmit(state, { payload }) {
      return {
        ...state,
        userInfo: payload
      }
    }
  }
}

export default LoginModel;