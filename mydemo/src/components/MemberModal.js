import React from 'react';
import styled from 'styled-components';
import { CloseBtn } from '../components';

const MemberModal = ({ isMemberModalOpen, memberDetail, closeMemberModal }) => {
  return (
    <Wrapper className={isMemberModalOpen ? 'show-member': ''}>
        <CloseBtn closeHandler={closeMemberModal}/>
        <h5>Member detail</h5>
        <div>
            <p>
                First Name: <span>{memberDetail?.firstName}</span>
            </p>
            <p>
                Last Name: <span>{memberDetail?.lastName}</span>
            </p>
            <p>
                Age: <span>{memberDetail?.age}</span>
            </p>
            <p>
                Relationship: <span>{memberDetail?.relationship}</span>
            </p>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    display: none;
    background-color: var(--grey-300);
    position: fixed;
    top: 0;
    left: 50%;
    margin-top: 15rem;
    transform: translateX(-50%);
    transition: var(--transition);
    width: 400px;
    border-radius: var(--borderRadius);
    padding: 1.5rem 0;
    &.show-member {
        display: block;
    }
    h5,p {
        margin: 0;
    }
`;

export default MemberModal