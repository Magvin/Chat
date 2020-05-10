import React, { useState } from 'react';
import {
  Form, Icon, Input, Checkbox,
} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import Button from '../../components/Button';
import Block from '../../components/Block';

// CSS
import './Auth.scss';

const Auth = () => {
  const [nameIsValid, setNameValid] = useState('');
  const onFinish = (values) => {
    if (values.length >= 4) {
      setNameValid('success');
    } else if (values.length < 4) {
      setNameValid('error');
    }
  };
  return (
    <section className="auth">
      <div className="auth__content">
        <div className="auth__top">
          <h2>Войти в аккаунт</h2>
          <p>Пожалуйста, войдите в свой аккаунт</p>
        </div>
        <Block>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
          >
            <Form.Item
              name="username"
              rules={[{ required: true, message: 'Please input your Username!' }]}
              validateStatus={nameIsValid}
              hasFeedback
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" size="large" onChange={(event) => onFinish(event.target.value)} />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please input your Password!' }]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
                size="large"
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <a className="login-form-forgot" href="">
                Forgot password
              </a>
            </Form.Item>

            <Form.Item>
              <Button size="large" type="primary" className="login-form-button" htmlType="submit">Log in</Button>
            </Form.Item>
            <Form.Item>
              <span>
                Or
                <a href=""> register now!</a>
              </span>
            </Form.Item>
          </Form>

        </Block>
      </div>

    </section>
  );
};

export default Auth;
