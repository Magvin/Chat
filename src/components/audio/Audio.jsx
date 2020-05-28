/* eslint-disable jsx-a11y/media-has-caption */
import React, { useRef, useEffect } from 'react';
import { CaretRightOutlined } from '@ant-design/icons';

import './Audio.scss';

const Audio = ({ src }) => {
  const audio = useRef();
  let audioDuration = 0;

  const playAudio = () => {
    audioDuration = audio.current.duration;
    audio.current.play();
    console.log(audioDuration);
  };

  useEffect(() => {
    audio.current.addEventListener('timeupdate', () => {
      console.log(audioDuration - audio.current.currentTime);
    });
  }, []);

  return (
    <div className="message__audio">
      <CaretRightOutlined className="audio__play" role="button" onClick={() => playAudio()} />
      <audio ref={audio} src={src} />
      <ul className="audio__track">
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
    </div>
  );
};

export default Audio;
