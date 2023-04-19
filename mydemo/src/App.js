import styled from 'styled-components';
import { CreateMemberForm, FamilyMembers } from './components'
import { useFamilyContext } from './context';

function App() {
  const {
    openCreateModalForm, 
    isCreateMemberModalOpen,
    closeCreateModalForm
  } = useFamilyContext();

  return (
    <Wrapper>
      <div className="family-container">
        <header>
          <h2>My Family Tree</h2>
        </header>
        <button 
          className='btn add-btn'
          onClick={openCreateModalForm}
          >
          add member
        </button>
      </div>
      <FamilyMembers />
      <CreateMemberForm  
        isCreateMemberModalOpen={isCreateMemberModalOpen}
        closeCreateModalForm={closeCreateModalForm}
      />
    </Wrapper>
  );
}

const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 5rem;
  text-align: center;
  position: relative;
`;

export default App;
