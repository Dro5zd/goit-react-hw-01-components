import { Profile } from '../Profile/Profile';
import { Statistics } from '../Statistics/Statistics';
import user from '../../data/user.json';
import data from '../../data/data.json';
import friends from '../../data/friends.json';
import items from '../../data/transactions.json';
import { FriendList } from '../FriendList/FriendList';
import { TransactionHistory } from '../TransactionHistory/TransactionHistory';
import { Menu } from '../Menu/Menu';
import { AppWrapper } from './App.styles';

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
