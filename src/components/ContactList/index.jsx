import React from 'react';
import OrderBy from 'lodash/orderBy';
import { ContactListItem } from '..';


const ContactList = ({ list, ownerId }) => (OrderBy(list, ['message.created_at'], ['desc']).map(({
  user, message, _id,
}) => (
  <ContactListItem
    isOnline={user.isOnline}
    user={user}
    key={_id}
    message={message}
    isMe={user.id === ownerId}
  />
)));


export default ContactList;
