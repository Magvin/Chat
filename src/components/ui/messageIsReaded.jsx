import React from 'react';
import readed from '../../assets/img/readed.svg';
import noReaded from '../../assets/img/noreaded.svg';


const MessageIsReaded = ({ isReaded, isMe }) => (

  <>
    {(isMe && isReaded) ? <img src={readed} alt="message readed" /> : isMe ? <img src={noReaded} alt="message is not readed" /> : null }
  </>

);


export default MessageIsReaded;
