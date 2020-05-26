import React from 'react';
import PropTypes from 'prop-types';

import readed from '../../assets/img/readed.svg';
import noReaded from '../../assets/img/noreaded.svg';


const MessageIsReaded = ({ isReaded, isMe, isSent }) => (

  <>
    {(isMe && isReaded) ? <img src={readed} alt="message readed" /> : (isMe && isSent) ? <img src={noReaded} alt="message is not readed" /> : null }
  </>

);


MessageIsReaded.defaultProps = {
  isReaded: false,
  isMe: false,
};
MessageIsReaded.propTypes = {
  isReaded: PropTypes.bool,
  isMe: PropTypes.bool,
};

export default MessageIsReaded;
