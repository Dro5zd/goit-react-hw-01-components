import React from 'react';
import PropTypes from 'prop-types';
import { FriendListItem } from '../FriendListItem/FriendListItem';
import { FriendListWrapper } from './FriendList.styles';

export const FriendList = ({ friends }) => {
  return (
    <section id='friendsList'>
      <FriendListWrapper>
        {friends.map(f => {
          return <FriendListItem key={f.id}
                                 avatar={f.avatar}
                                 name={f.name}
                                 isOnline={f.isOnline} />;
        })}
      </FriendListWrapper>
    </section>

  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
  })).isRequired,
};
