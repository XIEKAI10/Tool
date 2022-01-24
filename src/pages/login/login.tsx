import { ConnectState } from '@/models/connect';
import { Button, Col, Form, Input, Row } from 'antd';
import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import ReactColor from 'src/components/reactColor';
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
      <div>
        <ReactColor />
      </div>
      <div style={{ height: 80 }}></div>
      <div className={styles.loginBox}>
        <Row justify="center" className={styles.login}>
          <Col>Tool</Col>
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
            <Input size="large" placeholder="large size" prefix={<UserOutlined />} />
          </Form.Item>
          <Form.Item
            label="password"
            name="password"
            rules={[{ required: true, message: '12345' }]}
          >
            <Input.Password />
          </Form.Item>
          <Row>
            <Col span={16} push={8} style={{ display: 'flex', justifyContent: 'center' }}>
              <Form.Item>
                <Button loading={loading} type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};
export default connect(({ login, loading }: ConnectState) => ({
  login,
  logingLoading: loading.effects['login/login'],
}))(Login);
