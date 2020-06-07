import React from 'react';
import classnames from 'classnames';

import './ui.scss';

export default function Avatar({
  alt, avatar, className, id, name,
}) {
  const getAvatarOrPlaceholder = () => {
    if (avatar.length > 1) {
      return (
        <div className={classnames('item__avatar', className)}>
          <img src={avatar} alt={`Avatar of ${alt}`} />
        </div>
      );
    }
    return (
      <div className={classnames('item__avatar', 'item__avatar--no-avatar', className)}>
        <span style={{ backgroundColor: `#${id.slice(0, 4)}` }}>
          {name.slice(0, 1)}
        </span>
      </div>
    );
  };
  return (
    getAvatarOrPlaceholder()
  );
}
