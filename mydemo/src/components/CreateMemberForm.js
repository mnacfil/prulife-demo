import React from 'react';
import {CloseBtn, Form } from '../components';
import styled from 'styled-components';

const CreateMemberForm = ({ isCreateMemberModalOpen, closeCreateModalForm }) => {
    return (
        <Wrapper className={isCreateMemberModalOpen ? 'show-form': ''}>
            <div className="member-container">
                <CloseBtn closeHandler={closeCreateModalForm}/>
                <Form type='Add'/>
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

    &.show-form {
        display: block;
    }

    .member-container {
        position: relative;
    }
`;

export default CreateMemberForm