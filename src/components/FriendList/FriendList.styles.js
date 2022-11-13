import styled from 'styled-components';

const FriendListContainer = styled.section`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FriendListWrapper = styled.ul`
  margin-top: 100px;
  min-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;

export { FriendListContainer, FriendListWrapper };

