import React from 'react';
import PropTypes from 'prop-types';
import formatDistanceToNow from 'date-fns/esm/formatDistanceToNow';
import eoLocale from 'date-fns/locale/ru';
import classnames from 'classnames';
import readed from '../../assets/img/readed.svg';
import noReaded from '../../assets/img/noreaded.svg';

// CSS
import './Message.scss';

const Message = ({
  avatar, user, text, date, isMe, isReaded,
}) => {
  const formatDate = (d) => formatDistanceToNow(
    new Date(d), { locale: eoLocale, addSuffix: true },
  );
  return (
    <div className={classnames('message', { 'message--isme': isMe })}>
      <div className="message__avatar">
        <img src={avatar} alt={`Avatar of ${user.fullname}`} />
      </div>
      <div className="message__content">
        <div className="message__info">
          <div className="message__bubble">
            <p className="message__text">{text}</p>
          </div>
          {(isMe && isReaded) ? <img src={readed} alt="message readed" /> : <img src={noReaded} alt="message is not readed" /> }
          <span className="message__date">
            {formatDate(date)}
          </span>
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
};

Message.propTypes = {
  avatar: PropTypes.string,
  user: PropTypes.oneOfType([PropTypes.object]),
  text: PropTypes.string,
  date: PropTypes.string,
};

export default Message;
