import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const[inputValue, setInputValue] = useState('')

    //El e que recibe es el evento...
    const handleInputChange = (e) => {
        setInputValue( e.target.value );
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        //Validacion de no añadir espacios vacios
        if(inputValue.trim().length >2){
            setCategories(cats => [inputValue,...cats]);
            setInputValue('');
        }        
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={inputValue} 
                onChange={ handleInputChange }/>
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
