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
    const [ isMemberModalFormOpen, setIsMemberModalFormOpen] = useState(false);
    const [ familyMembers, setFamilyMembers ] = useState([]);
    const [ member, setMember ] = useState(defaultState);
    const [ activeMember, setActiveMember ] = useState(null);
    const [ isMemberModalOpen, setIsMemberModalOpen] = useState(false);
    const [ isEditing, setIsEditing ] = useState(false);
    const [ editID, setEditID ] = useState(null);
    const [ isBlackout, setIsBlackout ] = useState(false);

    console.log(familyMembers);

    const openMemberModalForm = () => {
        setIsMemberModalFormOpen(true);
        setIsBlackout(true);
    }
    const closeMemberModalForm = () => {
        setIsMemberModalFormOpen(false);
        setMember(defaultState);
        setIsBlackout(false)
    }
    const openMemberModal = () => {
        setIsMemberModalOpen(true);
        setIsBlackout(true);
    }
    const closeMemberModal = () => {
        setIsMemberModalOpen(false);
        setIsBlackout(false)
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
        closeMemberModalForm()
    }

    const removeMember = (id) => {
        setFamilyMembers(prevMembers => {
            return prevMembers.filter(familyMember => familyMember.id !== id);
        })
    }

    const setEditMember = (id) => {
        const memberToEdit = familyMembers.find(familyMember => familyMember.id === id);
        setEditID(id);
        setIsEditing(true);
        console.log(member);
        setMember({
            firstName: memberToEdit.firstName,
            lastName: memberToEdit.lastName,
            age: memberToEdit.age,
            relationship: memberToEdit.relationship
        });
        openMemberModalForm();
    }
    const editMember = (id) => {
        setFamilyMembers(prevMembers => {
            return prevMembers.map(familyMember => {
                if(familyMember.id === id) {
                    familyMember.firstName = member.firstName;
                    familyMember.lastName = member.lastName;
                    familyMember.age = member.age;
                    familyMember.relationship = member.relationship;
                }
                return familyMember;
            });
        });
        setMember(defaultState);
        setIsEditing(false);
        setEditID(null);
        closeMemberModalForm();
    }

    return (
        <FamilyContext.Provider
            value={{
                openMemberModalForm,
                closeMemberModalForm,
                handleInput,
                addMember,
                setActiveMember,
                openMemberModal,
                closeMemberModal,
                removeMember,
                setEditMember,
                editMember,
                isMemberModalFormOpen,
                activeMember,
                member,
                familyMembers,
                isMemberModalOpen,
                isEditing,
                editID,
                isBlackout
            }}
        >
            {children}
        </FamilyContext.Provider>
    )
}

export const useFamilyContext = () => useContext(FamilyContext);