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

    const openCreateModalForm = () => {
        setIsCreateMemberModalOpen(true);
    }
    const closeCreateModalForm = () => {
        setIsCreateMemberModalOpen(false);
        setMember(defaultState);
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
    console.log(familyMembers);
    return (
        <FamilyContext.Provider
            value={{
                isCreateMemberModalOpen,
                openCreateModalForm,
                closeCreateModalForm,
                handleInput,
                addMember,
                member,
                familyMembers
            }}
        >
            {children}
        </FamilyContext.Provider>
    )
}

export const useFamilyContext = () => useContext(FamilyContext);