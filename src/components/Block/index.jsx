import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// Utils
import { classModifier } from '../../utils/utils';

// CSS
import './Block.scss';

const Block = ({ children, className }) => (
  <div className={classnames(classModifier('block'), className)}>{children}</div>
);

Block.defaultProps = {
  children: '',
};
Block.propTypes = {
  children: PropTypes.node,
};
export default Block;
