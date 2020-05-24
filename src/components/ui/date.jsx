import React from 'react';
import formatDistanceToNow from 'date-fns/esm/formatDistanceToNow';
import eoLocale from 'date-fns/locale/ru';
import classnames from 'classnames';

import './ui.scss';

export default function CovertDate({ date, className }) {
  const formatDate = (d) => formatDistanceToNow(
    new Date(d), { locale: eoLocale, addSuffix: true },
  );
  return (
    <span className={classnames('item__date', className)}>
      {formatDate(date)}
    </span>
  );
}
