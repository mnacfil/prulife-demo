import { useState } from 'react';
import { createContext, useContext } from 'react';

const FamilyContext = createContext();
const defaultState = {
    firstName: '',
    lastName: '',
    age: '',
    relationship: ''
}

export const FamilyProvider = ({ children }) => {
    const [ isCreateMemberModalOpen, setIsCreateMemberModalOpen] = useState(false);
    const [ familyMembers, setFamilyMembers ] = useState([]);
    const [ member, setMember ] = useState(defaultState);
    const [ activeMember, setActiveMember ] = useState(null);
    const [ isMemberModalOpen, setIsMemberModalOpen] = useState(false);

    const openCreateModalForm = () => {
        setIsCreateMemberModalOpen(true);
    }
    const closeCreateModalForm = () => {
        setIsCreateMemberModalOpen(false);
        setMember(defaultState);
    }
    const openMemberModal = () => {
        setIsMemberModalOpen(true);
    }
    const closeMemberModal = () => {
        setIsMemberModalOpen(false);
    }

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setMember(prev => {
            return {
                ...prev,
                [name] : value
            }
        })
    }
    
    const addMember = () => {
        const user = {
            id: new Date().getTime(),
            firstName: member.firstName,
            lastName: member.lastName,
            age: member.age,
            relationship: member.relationship
        }
        setFamilyMembers(prevMembers => [...prevMembers, user]);
        setMember(defaultState);
        closeCreateModalForm()
    }

    return (
        <FamilyContext.Provider
            value={{
                isCreateMemberModalOpen,
                openCreateModalForm,
                closeCreateModalForm,
                handleInput,
                addMember,
                setActiveMember,
                openMemberModal,
                closeMemberModal,
                activeMember,
                member,
                familyMembers,
                isMemberModalOpen
            }}
        >
            {children}
        </FamilyContext.Provider>
    )
}

export const useFamilyContext = () => useContext(FamilyContext);