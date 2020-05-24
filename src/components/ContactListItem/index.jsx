import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// CSS
import './ContactListItem.scss';
import Avatar from '../ui/avatar';
import CovertDate from '../ui/date';
import MessageIsReaded from '../ui/messageIsReaded';

const ContactListItem = ({ className, incomingMessage }) => (
  <div className={classnames('contact-list__item', className)}>
    <div className="contact-list__item-avatar">
      {/* <img src={user.avatar} alt={`${user.fullName}`} /> */}
      <Avatar avatar="https://images.unsplash.com/photo-1537815749002-de6a533c64db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1090&q=80" alt="Фёдор Достоевский" />
    </div>
    <div className="contact-list__item-info">
      <div className="contact-list__item-info-top">
        <b>Фёдор Достоевский</b>
        <span>
          <CovertDate date={new Date()} />
        </span>
      </div>
      <div className="contact-list__item-info-bottom">
        <p>Мы все свидетельствуем Вам глубочайшее наше почтение и ценностей</p>
        {incomingMessage ? (
          <span className="contact-list__item-info-notification" />
        )
          : (
            <MessageIsReaded isMe />
          )}

      </div>
    </div>
  </div>
);

ContactListItem.defaultProps = {
  className: '',
  incomingMessage: false,
};
ContactListItem.propTypes = {
  className: PropTypes.string,
  incomingMessage: PropTypes.bool,
};
export default ContactListItem;
