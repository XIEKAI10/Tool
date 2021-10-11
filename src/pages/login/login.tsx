import { ConnectState } from '@/models/connect';
import { Button, Col, Form, Input, Row } from 'antd';
import React from 'react';
// import ReactColor from 'src/components/reactColor';
import { connect, useDispatch } from 'umi';
import styles from './index.less';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 8 },
};

interface LoginProps {
  loading?: boolean;
}

const Login: React.FC<LoginProps> = (props) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const { loading } = props;
  const onFinsh = (values: any) => {
    dispatch({
      type: 'login/submit',
      payload: { ...values },
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
      {/* <div style={{ marginTop: 30 }}>
        <ReactColor />
      </div> */}
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
        <Form.Item label="password" name="password" rules={[{ required: true, message: '12345' }]}>
          <Input.Password />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button loading={loading} type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default connect(({ login, loading }: ConnectState) => ({
  login,
  logingLoading: loading.effects['login/login'],
}))(Login);
