/* eslint-disable prefer-promise-reject-errors */
import React, { useState } from 'react';
import {
  UserOutlined, LockOutlined, MailOutlined, InfoCircleTwoTone,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Form, Input } from 'antd';
import Button from '../../../components/Button';
import Block from '../../../components/Block';

export default function RegisterForm() {
  const [nameIsValid, setNameValid] = useState('');
  const onFinish = (values) => {
    if (values.length >= 4) {
      setNameValid('success');
    } else if (values.length < 4) {
      setNameValid('error');
    }
  };
  const success = true;
  return (
    <>
      <div className="auth__top">
        <h2>Регистрация</h2>
        <p>Для входа в чат, вам нужно зарегистрироваться</p>
      </div>
      <Block>
        {!success ? (
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
          >
            <Form.Item
              name="email"
              rules={[{ required: true, message: 'Please input your Email!' }]}
              validateStatus={nameIsValid}
              hasFeedback
            >
              <Input prefix={<MailOutlined className="site-form-item-icon" />} type="email" placeholder="E-mail" size="large" onChange={(event) => onFinish(event.target.value)} />
            </Form.Item>
            <Form.Item
              name="name"
              rules={[{ required: true, message: 'Please input your name!' }]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Name"
                size="large"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input
                type="password"
                prefix={<LockOutlined className="site-form-item-icon" />}
                placeholder="Password"
                size="large"
                autoComplete="password"
              />
            </Form.Item>
            <Form.Item
              name="confirm"
              dependencies={['password']}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: 'Please confirm your password!',
                },
                ({ getFieldValue }) => ({
                  validator(rule, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject('The two passwords that you entered do not match!');
                  },
                }),
              ]}
            >

              <Input
                type="password"
                prefix={<LockOutlined className="site-form-item-icon" />}
                placeholder="Confirm password"
                size="large"
                autoComplete="password"
              />
            </Form.Item>


            <Form.Item>
              <Button size="large" type="primary" className="login-form-button" htmlType="submit">Зарегистрироваться</Button>
            </Form.Item>
            <Form.Item className="login-form-register">
              <Link to="/login">Войти в аккаунт</Link>
            </Form.Item>
          </Form>
        ) : (
          <div className="auth__success">
            <InfoCircleTwoTone className="info-icon" style={{ fontSize: '48px' }} />
            <h2>Подтвердите свой аккаунт</h2>
            <p>На вашу почту отправлено пиьсмо с ссылкой на подтверждение аккаунта.</p>
          </div>
        )}

      </Block>
    </>
  );
}
