import React from 'react';
import PropTypes, { bool } from 'prop-types';
import classnames from 'classnames';

// CSS
import './Message.scss';
import Avatar from '../ui/avatar';
import CovertDate from '../ui/date';
import MessageIsReaded from '../ui/messageIsReaded';

const Message = ({
  avatar, user, text, date, isMe, isReaded, attachements, isTyping,
}) => (
  <div className={classnames('message',
    {
      'message--isme': isMe,
      'message-is--typing': isTyping,
    })}
  >
    <Avatar avatar={avatar} alt={`Avatar of ${user.fullname}`} className="message__avatar" />
    <div className="message__content">
      <div className="message__info">
        <div className="message__info-wrapper">
          {(text || isTyping) && (
            <div className="message__bubble">
              {text && <p className="message__text">{text}</p>}
              {isTyping
                && (
                <div className="message__typing">
                  <span />
                  <span />
                  <span />
                </div>
                )}
            </div>
          )}
          <MessageIsReaded isMe={isMe} isReaded={isReaded} />
          <div className="message__attachements">
            {
              attachements
              && attachements.map((item, index, array) => (
                <div
                  className={classnames('message__attachements-item',
                    ((array.length === 1) && (/\.(gif|jpe?g|tiff|png|webp|bmp)$/i).test(item.filename)) ? 'message__attachements-item--single' : '')}
                  key={item.url}
                >
                  <img src={item.url} alt={item.filename} />
                </div>
              ))
            }
          </div>
          {date && (
          <CovertDate date={date} className="message__date" />
          )}
        </div>
      </div>
    </div>
  </div>
);

Message.defaultProps = {
  avatar: '',
  user: { name: '' },
  text: '',
  date: '',
  isMe: false,
  isReaded: false,
  attachements: [],
  isTyping: false,
};

Message.propTypes = {
  avatar: PropTypes.string,
  user: PropTypes.oneOfType([PropTypes.object]),
  text: PropTypes.string,
  date: PropTypes.string,
  isMe: bool,
  isReaded: bool,
  attachements: PropTypes.arrayOf(
    PropTypes.shape({
      filename: PropTypes.string,
      url: PropTypes.string,
    }),
  ),
  isTyping: bool,
};

export default Message;
