import React from 'react';
import styled from 'styled-components';
import {AiOutlineEdit, AiOutlineDelete} from 'react-icons/ai';

const Member = ({ 
  id, 
  firstName, 
  lastName, 
  age, 
  relationship, 
  setActiveMember, 
  openMemberModal, 
  removeMember,
  setEditMember
}) => {

  const handleClick = () => {
    setActiveMember({firstName, lastName, age, relationship});
    openMemberModal();
  }

  return (
    <Wrapper title='view detail'>
        <div className="member-container">
            <h4 onClick={handleClick}>{relationship}</h4>
            <div className="controllers">
              <button 
                className='edit-btn'
                onClick={() => setEditMember(id)}
              >
                <AiOutlineEdit />
              </button>
              <button 
                className='delete-btn'
                onClick={() => removeMember(id)}
                >
                <AiOutlineDelete />
              </button>
            </div>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
    background-color: var(--grey-900);
    border-radius: var(--borderRadius);
    margin-bottom: 1rem;
    box-shadow: var(--shadow-2);
    height: 40px;
    cursor: pointer;

    .member-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 5px;
      h4 {
        color: var(--white);
        margin: 0;
      }
      .controllers {
        display: flex;
        align-items: center;
        button {
          background: none;
          border: none;
          font-size: 1.25rem;
          cursor: pointer;
          transition: var(--transition);

          &:hover {
            opacity: 0.8;
          }
        }
        .edit-btn {
          color: green;
        }
        .delete-btn {
          color: red;
        }
      }
    }
`;

export default Member