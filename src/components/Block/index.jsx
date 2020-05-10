import React from 'react';
import PropTypes from 'prop-types';

// Utils
import { classModifier } from '../../utils/utils';

const Block = ({ children }) => (
  <div classNam={classModifier('block')}>{children}</div>
);

Block.defaultProps = {
  children: '',
};
Block.propTypes = {
  children: PropTypes.node,
};
export default Block;
