import React from 'react';
import { ContactListItem } from '..';


const ContactList = ({ list, ownerId }) => {
  console.log(list);
  return list && list.map(({
    user, message, _id,
  }) => (
    <ContactListItem
      isOnline={user.isOnline}
      user={user}
      key={_id}
      message={message}
      isMe={user.id === ownerId}
    />
  ));
};


export default ContactList;
