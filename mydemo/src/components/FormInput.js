import React from 'react'

const FormInput = ({ name, type, value, label, handleInput }) => {
  return (
    <div className='form-control'>
        <label htmlFor="">{label}</label>
        <input 
          type={type} 
          className='form-input' 
          value={value}
          name={name}
          onChange={handleInput}
          />
    </div>
  )
}

export default FormInput