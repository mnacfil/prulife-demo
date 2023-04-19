import React from 'react';
import {CloseBtn, Form } from '.';
import styled from 'styled-components';

const CreateMemberForm = ({ isMemberModalFormOpen, closeMemberModalForm, isEditing }) => {
    return (
        <Wrapper className={isMemberModalFormOpen ? 'show-form': ''}>
            <div className="member-container">
                <CloseBtn closeHandler={closeMemberModalForm}/>
                <Form isEditing={isEditing}/>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;

    &.show-form {
        display: block;
    }

    .member-container {
        position: relative;
    }
`;

export default CreateMemberForm