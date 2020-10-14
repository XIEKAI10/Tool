import request from '../utils/request';

interface loginParams { 
  sort: string,
  time: string,
}

export async function login(params: loginParams) {
  return request('', {
    method: 'POST',
    data: params,
  });
}
