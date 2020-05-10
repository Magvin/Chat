import React from 'react';
import PropTypes from 'prop-types';
import { Input as BaseInput } from 'antd';

// CSS
import './Input.scss';

const Input = ({ value }) => (
  <BaseInput value={value} />
);


Input.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Input;
