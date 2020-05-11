import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { Form, Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import Button from '../../../components/Button';
import Block from '../../../components/Block';

export default function LoginForm() {
  const [nameIsValid, setNameValid] = useState('');
  const onFinish = (values) => {
    if (values.length >= 4) {
      setNameValid('success');
    } else if (values.length < 4) {
      setNameValid('error');
    }
  };
  return (
    <>
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
          {/* <Form.Item>
              <a className="login-form-forgot" href="">
                Забыл пароль
              </a>
            </Form.Item> */}

          <Form.Item>
            <Button size="large" type="primary" className="login-form-button" htmlType="submit">Войти в аккаунт</Button>
          </Form.Item>
          <Form.Item className="login-form-register">
            <Link to="/register">Зарегистрироваться!</Link>
          </Form.Item>
        </Form>

      </Block>
    </>
  );
}
