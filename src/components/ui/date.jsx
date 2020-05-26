import React from 'react';
import { formatDistanceToNow, formatRelative } from 'date-fns';
import eoLocale from 'date-fns/locale/ru';
import classnames from 'classnames';

import './ui.scss';

export default function CovertDate({ date, className, relative }) {
  const formatDateToRelative = (d) => formatRelative(new Date(d), new Date(), { locale: eoLocale, addSuffix: true });
  const formatDate = (d) => formatDistanceToNow(
    new Date(d), { locale: eoLocale, addSuffix: true },
  );
  return (
    <span className={classnames('item__date', className)}>
      {relative ? formatDateToRelative(date) : formatDate(date)}
    </span>
  );
}
