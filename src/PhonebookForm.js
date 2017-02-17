import React from 'react';

class PhonebookForm extends React.Component {

addContact = (e) => {
  e.preventDefault();
  let {name, number, form} = this.refs;
  this.props.addContactItem(name.value, number.value);
  form.reset();
}
    

    render(){
        return (
            <div>
              <form ref="form" onSubmit={this.addContact}>
                <input ref="name" placeholder="Enter Your Name" required={true}/>
                <input ref="number" placeholder="Your Phone Number" required={true}/>
                <button className="btn">Submit</button>
              </form>                
            </div>
        );
    }
}

export default PhonebookForm;