import React from 'react';
import classnames from 'classnames';

import './ui.scss';

export default function Avatar({ user, avatar, className }) {
  return (
    <div className={classnames('item__avatar', className)}>
      <img src={avatar} alt={`Avatar of ${user}`} />
    </div>
  );
}
