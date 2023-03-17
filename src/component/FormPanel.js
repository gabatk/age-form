import React from 'react';
import AppHeader from './AppHeader'
import './FormPanel.css';

const FormPanel = () => {

    return (
        <div className='box'>
            <AppHeader />
        <form>
            <label for='username'>Username:</label>
            <input type={'text'} name='username'></input>
            <label for='age'>Age (Years):</label>
            <input type={'number'} name='age'></input>
        </form>
        <button type='submit'>Add User</button>
        </div>
    )
};

export default FormPanel;
