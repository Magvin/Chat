import React from 'react';
import { ContactList } from '../../components';

export default function Home() {
  return (
    <section className="home">
      <ContactList
        ownerId="2"
        list={[
          {
            id: '1',
            message: {
              text: 'Привет, как твои дела?',
              messageSent: true,
              created_at: 'Sun May 16 2020 21:16:55',
              isReaded: false,
            },
            user: {
              id: '2',
              isOnline: true,
              name: 'Фёдор Достоевский',
              avatar: 'https://images.unsplash.com/photo-1537815749002-de6a533c64db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1090&q=80',
            },
          },
          {
            id: '2',
            message: {
              text: 'Мы все свидетельствуем Вам глубочайшее наше почтение и ценностей',
              messageSent: false,
              created_at: 'Sat May 23 2020 21:16:55',
              messagesRecieved: '2',
            },
            user: {
              id: 'b068931cc450442b63f5b3d276ea4297',
              isOnline: false,
              name: 'Алан Тюринг',
              avatar: '',

            },
          },
        ]}
      />
      {/* <Message

        avatar="https://images.unsplash.com/photo-1537815749002-de6a533c64db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1090&q=80"
        date="Tue May 12 2020 21:16:22"
        audio="https://notificationsounds.com/soundfiles/eb6fdc36b281b7d5eabf33396c2683a2/file-sounds-1158-lovingly.wav"
      /> */}
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
