import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// CSS
import './ContactListItem.scss';
import Avatar from '../ui/avatar';
import CovertDate from '../ui/date';
import MessageIsReaded from '../ui/messageIsReaded';

const ContactListItem = ({
  className, message, user, isMe,
}) => (
  <div className={classnames('contact-list__item', className)}>
    <div className={classnames('contact-list__item-avatar', user.isOnline ? 'contact-list__item-avatar--isOnline' : null)}>
      <Avatar avatar={user.avatar} alt={user.name} id={user.id} name={user.name} />
    </div>
    <div className="contact-list__item-info">
      <div className="contact-list__item-info-top">
        <b>{user.name}</b>
        <span>
          <CovertDate relative date={message.created_at} />
        </span>
      </div>
      <div className="contact-list__item-info-bottom">
        <p>{message.text}</p>
        {(message.text && message.messagesRecieved) ? (
          <span className="contact-list__item-notification">
            {message.messagesRecieved}
          </span>
        )
          : (
            <MessageIsReaded isMe={isMe} isReaded={message.isReaded} isSent={message.messageSent} />
          )}

      </div>
    </div>
  </div>
);

ContactListItem.defaultProps = {
  user: '',
  message: '',
  className: '',
  messagesRecieved: '',
  isOnline: false,
  isMe: false,
};
ContactListItem.propTypes = {
  user: PropTypes.oneOfType([PropTypes.object]),
  message: PropTypes.oneOfType([PropTypes.object]),
  className: PropTypes.string,
  messagesRecieved: PropTypes.string,
  isOnline: PropTypes.bool,
  isMe: PropTypes.bool,
};
export default ContactListItem;
