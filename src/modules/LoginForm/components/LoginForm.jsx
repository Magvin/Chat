import React from 'react';

import { Link } from 'react-router-dom';
import { Form, Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import Button from '../../../components/Button';
import Block from '../../../components/Block';
import { validationStatus } from '../../../utils/validation';

const LoginForm = (props) => {
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
            validateStatus={validationStatus('username', touched, errors, values)}
            hasFeedback
          >
            <Input
              id="username"
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
              size="large"
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Form.Item>
          <Form.Item
            validateStatus={validationStatus('password', touched, errors, values)}
            help={touched.password ? errors.password : null}
            hasFeedback
          >
            <Input
              id="password"
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
              size="large"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Form.Item>

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
};

export default LoginForm;
