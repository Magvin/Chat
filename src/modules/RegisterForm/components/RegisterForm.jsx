/* eslint-disable no-nested-ternary */
import React from 'react';
import {
  UserOutlined, LockOutlined, MailOutlined, InfoCircleTwoTone,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Form, Input } from 'antd';
import Button from '../../../components/Button';
import Block from '../../../components/Block';

const RegisterForm = (props) => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isValid,
    dirty,
  } = props;
  const success = false;

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
            onSubmit={handleSubmit}
          >
            <Form.Item
              validateStatus={
                !touched.email ? '' : errors.email && touched.email ? 'error' : 'success'
              }
              help={touched.email ? errors.email : null}
              hasFeedback
            >
              <Input
                id="email"
                prefix={<MailOutlined className="site-form-item-icon" />}
                type="email"
                placeholder="E-mail"
                size="large"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
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
              validateStatus={!touched.password ? '' : errors.password && touched.password ? 'error' : 'success'}
              help={touched.password ? errors.password : null}
              hasFeedback
            >
              <Input
                id="password"
                type="password"
                prefix={<LockOutlined className="site-form-item-icon" />}
                placeholder="Password"
                size="large"
                autoComplete="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
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
              <Button size="large" type="primary" className="login-form-button" htmlType="submit" onClick={handleSubmit}>Зарегистрироваться</Button>
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
};

export default RegisterForm;
