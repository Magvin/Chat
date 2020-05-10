import React from 'react';
import PropTypes from 'prop-types';

// Utils
import { classModifier } from '../../utils/utils';

// CSS
import './Block.scss';

const Block = ({ children }) => (
  <div className={classModifier('block')}>{children}</div>
);

Block.defaultProps = {
  children: '',
};
Block.propTypes = {
  children: PropTypes.node,
};
export default Block;
