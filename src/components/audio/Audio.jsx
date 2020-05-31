/* eslint-disable jsx-a11y/media-has-caption */
import React, { useRef, useEffect, useState } from 'react';
import { CaretRightOutlined } from '@ant-design/icons';
import classnames from 'classnames';

import './Audio.scss';

const Audio = ({ src }) => {
  const audio = useRef();
  let audioDuration = 0;

  const [audioWidth, setAudioWidth] = useState(0);
  const [audioCurrentTime, setCurrentTime] = useState(null);

  const playAudio = () => {
    audioDuration = audio.current.duration;
    audio.current.play();
  };
  function setAudioTime(time) {
    let settedTime;
    if (time === 'currentTime') {
      settedTime = audio.current.currentTime;
    } else {
      settedTime = audio.current.duration;
    }
    const roundedSeconds = (Math.round(settedTime) % 60);
    const seconds = roundedSeconds < 10 ? `0${roundedSeconds}` : roundedSeconds;
    setCurrentTime(`${Math.floor(Math.round(settedTime) / 60)}:${seconds}`);
  }

  useEffect(() => {
    audio.current.addEventListener('loadedmetadata', () => {
      setAudioTime('duration');
    });
    audio.current.addEventListener('timeupdate', () => {
      setAudioTime('currentTime');
      setAudioWidth((100 - Math.round(200 / (audioDuration - audio.current.currentTime))));
    });
  }, []);

  return (
    <div className="message__audio audio--playing">
      <CaretRightOutlined className="audio__play" role="button" onClick={() => playAudio()} />
      <audio ref={audio} src={src} preload="metadata" />
      <ul className={classnames('audio__track', audioWidth > 0 ? 'audio__track--playing' : null)} style={{ clipPath: `inset(0px ${audioWidth}% 0px 0px)` }}>
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
      </ul>
      <span className="audio__time">{audioCurrentTime}</span>
    </div>
  );
};

export default Audio;
