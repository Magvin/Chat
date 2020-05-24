import React from 'react';
import { ContactListItem } from '../../components';

export default function Home() {
  return (
    <section className="home">
      <ContactListItem />
      {/* <ContactList item={[
        {
          user: {
            fullName: 'Фёдор Достоевский',
            avatar: 'https://images.unsplash.com/photo-1537815749002-de6a533c64db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1090&q=80',
          },
          message: {
            text: 'Мы все свидетельствуем, а не пытаемся победить',
            isReaded: false,
            created_at: new Date(),
          },
        },
      ]}
      />  */}
      {/* <Message
        avatar="https://images.unsplash.com/photo-1537815749002-de6a533c64db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1090&q=80"
        text="Салам, Брут!"
        date="Tue May 12 2020 21:16:22"
        attachements={[
          {
            filename: 'image.jpg',
            url: 'https://source.unsplash.com/100x100/?random=1&nature,water',
          },
          {
            filename: 'image.jpg',
            url: 'https://source.unsplash.com/100x100/?random=2&nature,water',
          },
          {
            filename: 'image.jpg',
            url: 'https://source.unsplash.com/100x100/?random=3&nature,water',
          },
        ]}
      />
      <Message
        avatar="https://wi-images.condecdn.net/image/jgov7eBrRvb/crop/2040/f/6-facial-recognition-hero.jpg"
        text="Салам, Брут!"
        date="Tue May 12 2020 22:16:22"
        isMe
        isReaded
      />
      <Message
        avatar="https://images.unsplash.com/photo-1537815749002-de6a533c64db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1090&q=80"
        isTyping
      />
      <Message
        avatar="https://images.unsplash.com/photo-1537815749002-de6a533c64db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1090&q=80"
        date="Tue May 12 2020 22:16:22"
        attachements={[
          {
            filename: 'image.jpg',
            url: 'https://source.unsplash.com/100x100/?random=1&nature,water',
          },
        ]}
      /> */}
    </section>
  );
}
