import React from 'react';

const Contacts = ({name, number, id}) => (
    <div className="row yellow lighten-4 no-margin-bottom" id={id}>
        <div className="col s6 left">{name}</div>
        <div className="col s6 left">{number}</div>
    </div>
)


export default Contacts;