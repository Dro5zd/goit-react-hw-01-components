import styled from 'styled-components';

const FriendListLi = styled.li`
  min-width: 200px;
  padding: 5px 10px;
  display: flex;
  align-items: center;
  background-color: white;
  margin-bottom: 10px;
  border-radius: 5px;
  box-shadow: 3px 3px 3px 0 rgb(0 0 0 / 64%);
`;

const FriendListItemImage = styled.img`
  width: 40px;
  height: 40px;
  background-color: aliceblue;
  border-radius: 50%;
`;

const FriendListItemName = styled.span`
  margin-left: 5px;
  color: inherit;
  font-size: 15px;
  font-weight: bold;
`;

const FriendListItemStatus = styled.span`
  height: 10px;
  width: 10px;
  border-radius: 50%;
  margin-right: 5px;
  background-color: ${props => props.isOnline ? 'red' : 'green'};;
`;

export { FriendListLi, FriendListItemImage, FriendListItemName, FriendListItemStatus };
