import { useState } from 'react';
import { createContext, useContext } from 'react';

const FamilyContext = createContext();

export const FamilyProvider = ({ children }) => {
    const [ isCreateMemberModalOpen, setIsCreateMemberModalOpen] = useState(false);

    const openCreateModalForm = () => {
        setIsCreateMemberModalOpen(true);
    }
    const closeCreateModalForm = () => {
        setIsCreateMemberModalOpen(false);
    }

    return (
        <FamilyContext.Provider
            value={{
                isCreateMemberModalOpen,
                openCreateModalForm,
                closeCreateModalForm
            }}
        >
            {children}
        </FamilyContext.Provider>
    )
}

export const useFamilyContext = () => useContext(FamilyContext);