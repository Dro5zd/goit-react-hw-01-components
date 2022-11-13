import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import items from '../data/transactions.json';
import styled from 'styled-components';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import { Menu } from './Menu/Menu';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  background-color: #f5f5f5;
  color: #010101;
`;

export const App = () => {
  return (
    <AppWrapper>
      <Menu />
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats} />
      <Statistics
        title='Upload stats'
        stats={data} />
      <FriendList
        friends={friends}
      />
      <TransactionHistory items={items} />
    </AppWrapper>
  );
};
