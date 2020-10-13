import React, { Fragment } from 'react';
import { Row, Col, Form, Input, Button } from 'antd';
import { useDispatch, connect} from 'umi';
import styles from './index.less';


const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 8 },
};


const Login = () => { 
  const dispatch = useDispatch();
   const [form] = Form.useForm();
   const onFinsh = (values: any) => {
    dispatch({
      type: 'login/submit',
      payload: values,
    });
  };

  const onFinishFailed = (error: any) => {
    console.log(error);
  };
  return (
    <div className={styles.wrap}>
      <Row justify="center">
        <Col className={styles.login}>Login</Col>
      </Row>
      <Form
        className={styles.form}
        {...layout}
        name="login"
        form={form}
        onFinish={onFinsh}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item label="name" name="name" rules={[{ required: true, message: '12345' }]}>
          <Input />
        </Form.Item>
        <Form.Item
          label="password"
          name="password"
          rules={[{ required: true, message: '12345' }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

// export default Login;
export default connect(({ login } : any) => ({
  login,
}))(Login);
