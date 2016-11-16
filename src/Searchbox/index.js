import React, { Component } from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';
import { Field, reduxForm } from 'redux-form';

import './styles.css';

class Searchbox extends Component {
    shouldComponentUpdate = shouldPureComponentUpdate;

    render() {
        const {handleSubmit, done} = this.props;

        return (
            <div className='searchbox'>
                <form onSubmit={handleSubmit}>
                    <div className='input-group'>
                        <Field name='title' type='text' component='input' className='form-control' placeholder='Search by the title' />
                        <span className='input-group-btn'>
                            <button className='btn btn-default' type='submit' disabled={!done}>Search</button>
                        </span>
                    </div>
                </form>
            </div>
        );
    }
}

Searchbox = reduxForm({
    form: 'searchbox'
})(Searchbox);

export default Searchbox;
