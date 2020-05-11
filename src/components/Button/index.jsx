import React from 'react';
import PropTypes from 'prop-types';
import { Button as BaseButton } from 'antd';

// Utils
import { classModifier } from '../../utils/utils';
import classnames from 'classnames';

// CSS
import './Button.scss';

const Button = (props) => {
  const { children, size, className } = props;

  const getButtonClass = (buttonSize) => {
    switch (buttonSize) {
      case 'large':
        return 'button--large';
      case 'small':
        return 'button--small';
      default:
        return 'button--default';
    }
  };

  return (
    <BaseButton {...props} className={classnames(`${classModifier('button')} ${getButtonClass(size)}`, className)}>
      {children}
    </BaseButton>
  );
};

Button.defaultProps = {
  className: '',
  size: 'default',
  children: '',
};

Button.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string,
  children: PropTypes.string,
};

export default Button;
