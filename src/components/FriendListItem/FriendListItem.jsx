import React from 'react';
import { FriendListItemImage, FriendListItemName, FriendListItemStatus, FriendListLi } from './FriendListItem.styles';
import PropTypes from 'prop-types';

export const FriendListItem = ({
                                 avatar, name, isOnline,
                               }) => {
  return (
    <FriendListLi>
      <FriendListItemStatus isOnline={isOnline} />
      <FriendListItemImage src={avatar} alt='User avatar' width='48' />
      <FriendListItemName>{name}</FriendListItemName>
    </FriendListLi>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
