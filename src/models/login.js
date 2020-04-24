import { message } from "antd"


export default {
  namespace: 'login',
  state: {
    userInfo: {}
  },
  effects: {
    *submit({ payload }, { call, put }) {
      console.log(payload)
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