import React from 'react';
// import PropTypes from 'prop-types';
import classnames from 'classnames';

// Utils
import { classModifier } from '../../utils/utils';

// CSS
import './ContactListItem.scss';
import Avatar from '../ui/avatar';
import CovertDate from '../ui/date';

const Block = ({ className }) => (
  <div className={classnames(classModifier('dialog__item'), className)}>
    <div className="dialog__item-avatar">
      {/* <img src={user.avatar} alt={`${user.fullName}`} /> */}
      <Avatar avatar="https://images.unsplash.com/photo-1537815749002-de6a533c64db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1090&q=80" alt="Фёдор Достоевский" />
    </div>
    <div className="dialog__item-info">
      <div className="dialog__item-info-top">
        <b>Фёдор Достоевский</b>
        <span>
          <CovertDate date={new Date()} />
        </span>
      </div>
      <div className="dialog__item-info-bottom">
        <p>Мы все свидетельствуем Вам глубочайшее наше почтение и ценностей</p>
      </div>
    </div>
  </div>
);

// Block.defaultProps = {
//   children: '',
// };
// Block.propTypes = {
//   children: PropTypes.node,
// };
export default Block;
