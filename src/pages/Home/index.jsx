import React from 'react';
import { Message } from '../../components';

export default function Home() {
  return (
    <section className="home">
      <Message
        avatar="https://images.unsplash.com/photo-1537815749002-de6a533c64db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1090&q=80"
        text="Салам, Брут!"
        date="Tue May 12 2020 21:16:22"
        isMe={false}
      />
      <Message
        avatar="https://wi-images.condecdn.net/image/jgov7eBrRvb/crop/2040/f/6-facial-recognition-hero.jpg"
        text="Салам, Брут!"
        date="Tue May 12 2020 22:16:22"
        isMe={true}
        isReaded={false}
      />
    </section>
  );
}
