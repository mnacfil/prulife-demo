import React from 'react'
import { FormInput } from '../components';
import styled from 'styled-components';
import { useFamilyContext } from '../context';

const Form = ({ isEditing }) => {
  const {
    member: { firstName, lastName, age, relationship }, 
    handleInput,
    addMember,
    editMember,
    editID,
  } = useFamilyContext()

  const handleClick = () => {
    if(!isEditing) {
      addMember();
      return
    }
    editMember(editID);
  }

  return (
    <StyleForm className='form' onSubmit={(e) => e.preventDefault()}>
        <h3>{isEditing? 'Edit' : 'Add'} Member</h3>
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
          onClick={handleClick}
          >
            {isEditing ? 'Save': 'Add'}
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