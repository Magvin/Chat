/* eslint-disable jsx-a11y/media-has-caption */
import React, { useRef, useEffect, useState } from 'react';
import classnames from 'classnames';
import wave from '../../assets/img/wave.svg';

import './Audio.scss';

const Audio = ({ src }) => {
  const audio = useRef();


  const [audioWidth, setAudioWidth] = useState(0);
  const [audioCurrentTime, setCurrentTime] = useState(null);
  const [audioPlaying, setAudioPlaying] = useState(false);

  const playAudio = () => {
    if (audioPlaying === false) {
      setAudioPlaying(true);
      audio.current.play();
    } else if (audioPlaying === true) {
      setAudioPlaying(false);
      audio.current.pause();
    }
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
      const duration = (audio.current && audio.current.duration) || 0;
      setAudioTime('currentTime');
      setAudioWidth(((audio.current.currentTime / duration) * 100));
    });
    audio.current.addEventListener('ended', () => {
      setAudioWidth(0);
      setAudioPlaying(false);
    });
  }, []);

  return (
    <>
      <div className="message__audio audio--playing" style={{ width: audioWidth ? `calc(${audioWidth}% - 24px)` : '0px', padding: audioWidth > 0 ? '10px 12px' : '0px' }} />
      <button className={classnames('audio__button', audioPlaying ? 'audio__button--pause' : 'audio__button--play')} onClick={() => playAudio()} type="button"> </button>
      <audio ref={audio} src={src} preload="metadata" />
      <img className="audio__wave" src={wave} alt="wave" />
      <span className="audio__time">{audioCurrentTime}</span>
    </>
  );
};

export default Audio;
