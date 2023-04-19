import React from 'react';
import {CloseBtn, Form } from '../components';
import styled from 'styled-components';

const CreateMemberForm = ({ isCreateMemberModalOpen, closeCreateModalForm }) => {
    return (
        <Wrapper className={isCreateMemberModalOpen ? 'show-form': ''}>
            <div className="member-container">
                <CloseBtn closeHandler={closeCreateModalForm}/>
                <Form />
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    display: none;
    &.show-form {
        display: block;
    }

    .member-container {
        position: relative;
    }
`;

export default CreateMemberForm