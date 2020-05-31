/* eslint-disable jsx-a11y/media-has-caption */
import React, { useRef, useEffect, useState } from 'react';
import { CaretRightOutlined } from '@ant-design/icons';
import classnames from 'classnames';

import './Audio.scss';

const Audio = ({ src }) => {
  const audio = useRef();
  let audioDuration = 0;

  const [audioWidth, setAudioWidth] = useState(0);

  const playAudio = () => {
    audioDuration = audio.current.duration;
    audio.current.play();
  };

  useEffect(() => {
    audio.current.addEventListener('timeupdate', () => {
      setAudioWidth(Math.round(((audio.current.currentTime - audioDuration) * -35)));
      console.log(audioWidth);
    });
  }, []);

  return (
    <div className="message__audio audio--playing">
      <CaretRightOutlined className="audio__play" role="button" onClick={() => playAudio()} />
      <audio ref={audio} src={src} />
      <ul className={classnames('audio__track', audioWidth > 0 ? 'audio__track--playing' : null)} style={{ clipPath: `inset(0px ${audioWidth}px 0px 0px)` }}>
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
