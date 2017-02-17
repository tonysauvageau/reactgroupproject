import React from 'react';

const Contacts = ({name, number, id}) => (
    <li id={id}>{name} - {number}</li>
)


export default Contacts;