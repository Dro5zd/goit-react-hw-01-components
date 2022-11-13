import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuid4 } from 'uuid';
import {
  DescriptionP,
  ProfileContainer,
  ProfileDescription,
  ProfileImage,
  ProfileWrapper,
  StatsLi,
  StatsLiSpan,
  StatsUl,
} from './Profile.styles';

export const Profile = ({
                          username,
                          tag,
                          location,
                          avatar,
                          stats,
                        }) => {
  const statsValues = Object.entries(stats);
  return (
    <ProfileContainer id='profile'>
      <ProfileWrapper>
        <ProfileDescription>
          <ProfileImage
            src={avatar}
            alt='User avatar'
          />
          <DescriptionP className='name'>{username}</DescriptionP>
          <DescriptionP>@{tag}</DescriptionP>
          <DescriptionP>{location}</DescriptionP>
        </ProfileDescription>

        <StatsUl className='stats'>
          {statsValues.map(i => {
            return <StatsLi key={uuid4()}>
              <StatsLiSpan>{i[0].charAt(0).toUpperCase() + i[0].slice(1)}</StatsLiSpan>
              <StatsLiSpan className='quantity'>{i[1]}</StatsLiSpan>
            </StatsLi>;
          })}
        </StatsUl>
      </ProfileWrapper>
    </ProfileContainer>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }).isRequired,
};
