import React from 'react';
import PropTypes, { bool } from 'prop-types';
import formatDistanceToNow from 'date-fns/esm/formatDistanceToNow';
import eoLocale from 'date-fns/locale/ru';
import classnames from 'classnames';
import readed from '../../assets/img/readed.svg';
import noReaded from '../../assets/img/noreaded.svg';

// CSS
import './Message.scss';

const Message = ({
  avatar, user, text, date, isMe, isReaded, attachements, isTyping,
}) => {
  const formatDate = (d) => formatDistanceToNow(
    new Date(d), { locale: eoLocale, addSuffix: true },
  );
  return (
    <div className={classnames('message',
      {
        'message--isme': isMe,
        'message-is--typing': isTyping,
      })}
    >
      <div className="message__avatar">
        <img src={avatar} alt={`Avatar of ${user.fullname}`} />
      </div>
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
            {(isMe && isReaded) ? <img src={readed} alt="message readed" /> : isMe ? <img src={noReaded} alt="message is not readed" /> : null }
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
            <span className="message__date">
              {formatDate(date)}
            </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

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
