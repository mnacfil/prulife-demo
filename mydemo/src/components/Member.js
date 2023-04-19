import React from 'react';
import styled from 'styled-components';

const Member = ({ id, firstName, lastName, age, relationship }) => {
  return (
    <Wrapper>
        <div className="member-container">
            {relationship}
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
    background-color: var(--primary-200);
    border-radius: var(--borderRadius);
    margin-bottom: 1rem;
`;

export default Member