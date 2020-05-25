import React from 'react';
import { ContactListItem } from '../../components'


const ContactList = ({list}) => {
console.log(list)
 return list && list.map(({isOnline, name}, index)=>(
     <ContactListItem isOnline={isOnline} name={name} key={index}/>
 ))
}




export default ContactList;