import React, { Component } from 'react';
import { Row, Col, Form, Input, Button } from 'antd';
import styles from './index.less';
import { connect } from 'dva';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 8 },
};
class Login extends Component {

  onFinsh = values => {
    const { dispatch } = this.props;
    dispatch({
      type: 'login/submit',
      payload: values
    })
  }

  onFinishFailed = error => {
    console.log(error)
  }


  render() {
    console.log(test)
    return(
      <div className={styles.wrap}>
        <Row justify='center'>
          <Col className={styles.login}>Login</Col>
        </Row>
        <Form
          className={styles.form}
          {...layout}
          name='login'
          onFinish={this.onFinsh}
          onFinishFailed={this.onFinishFailed}
        >
          <Form.Item
            label='name'
            name='name'
            rules={[{ required: true, message: '12345'}]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label='password'
            name='password'
            rules={[{ required: true, message: '12345'}]}
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
}

export default connect(({ login }) => ({
  login
}))(Login)