import React from 'react';

class PhonebookForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = { text: '' }
    }

    addContact = (e) => {
        e.preventDefault();
        let { name, number, form } = this.refs;
        this.props.addTodoItem( name.value, number.value)
        form.reset();
    }
    

    render(){
        return (
            <div>
                <form ref="form" onSubmit={this.addContact}>
                    <input ref="name" placeholder="Name" required={true} />
                    <input ref="number" placeholder="Number" required={true} />
                </form>
            </div>
        );
    }
}

export default PhonebookForm;