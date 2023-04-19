import React from 'react'
import { FormInput } from '../components';
import styled from 'styled-components';
import { useFamilyContext } from '../context';

const Form = ({ type }) => {
  const {
    member: { firstName, lastName, age, relationship }, 
    handleInput,
    addMember 
  } = useFamilyContext()
  return (
    <StyleForm className='form' onSubmit={(e) => e.preventDefault()}>
        <h3>{type} Member</h3>
        <FormInput 
          type='text'
          name="firstName"
          label="First Name"
          value={firstName}
          handleInput={handleInput}
        />
        <FormInput 
          type='text'
          name="lastName"
          label="Last Name"
          value={lastName}
          handleInput={handleInput}
        />
        <FormInput 
          type='text'
          name="age"
          label="Age"
          value={age}
          handleInput={handleInput}
        />
        <FormInput 
          type='text'
          name="relationship"
          label="Relationship"
          value={relationship}
          handleInput={handleInput}
        />
        <button 
          className='btn btn-block'
          onClick={addMember}
          >
            Add
          </button>
    </StyleForm>
  )
}

const StyleForm = styled.form`
  text-align: left;
  h3 {
    text-align: center;
  }
  .btn {
    margin-top: 1rem;
  }
`;

export default Form