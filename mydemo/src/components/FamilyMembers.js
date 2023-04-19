import React from 'react';
import styled from 'styled-components';
import { Member, MemberModal } from '../components';
import { useFamilyContext } from '../context';

const FamilyMembers = () => {
    const { 
        familyMembers, 
        setActiveMember, 
        isMemberModalOpen,
        activeMember,
        openMemberModal,
        closeMemberModal 
    } = useFamilyContext();
    return <>
        <Wrapper>
            <div className="family-container">
                {familyMembers.length > 0 ?
                    familyMembers.map((member, index) => {
                        return (
                            <Member 
                                {...member} 
                                key={index}
                                setActiveMember={setActiveMember}
                                openMemberModal={openMemberModal}
                            />
                        )
                    })
                : 
                    <p>No Member.</p>
                }
            </div>
            <MemberModal 
                isMemberModalOpen={isMemberModalOpen}
                memberDetail={activeMember}
                closeMemberModal={closeMemberModal}
            />
        </Wrapper>
    </>
}

const Wrapper = styled.section`
    margin: 0;
    width: 500px;
    margin-top: 2rem;
    background-color: var(--white);
    padding: 2rem 1rem;
    box-shadow: var(--shadow-2);
    border-radius: var(--borderRadius);
`;

export default FamilyMembers