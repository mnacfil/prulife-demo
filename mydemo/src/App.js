import styled from 'styled-components';
import { MemberForm, FamilyMembers } from './components'
import { useFamilyContext } from './context';

function App() {
  const {
    openMemberModalForm, 
    closeMemberModalForm,
    isMemberModalFormOpen,
    isEditing
  } = useFamilyContext();

  return (
    <Wrapper>
      <div className="family-container">
        <header>
          <h2>My Family Tree</h2>
        </header>
        <button 
          className='btn add-btn'
          onClick={openMemberModalForm}
          >
          add member
        </button>
      </div>
      <FamilyMembers />
      <MemberForm  
        isMemberModalFormOpen={isMemberModalFormOpen}
        closeMemberModalForm={closeMemberModalForm}
        isEditing={isEditing}
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
