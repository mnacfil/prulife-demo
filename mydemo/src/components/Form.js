import React from 'react'
import { FormInput } from '../components';
const Form = ({ type }) => {
  return (
    <form className='form'>
        <h3>{type} Member</h3>
        <FormInput 
            type='text'
        />
    </form>
  )
}

export default Form