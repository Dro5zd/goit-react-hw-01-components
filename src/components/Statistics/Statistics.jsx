import React from 'react';
import PropTypes from 'prop-types';
import {
  StatisticsContainer,
  StatisticsTitle,
  StatisticsWrapper,
  StatsLi,
  StatsLiSpan,
  StatsUl,
} from './Statistics.styles';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export const Statistics = ({
                             title,
                             stats,
                           }) => {
  return (
    <StatisticsContainer id='statistics'>
      <StatisticsWrapper>
        {title.length > 0 && <StatisticsTitle className='title'>{title.toUpperCase()}</StatisticsTitle>}
        <StatsUl>
          {stats.map(st => {
            return <StatsLi key={st.id} style={{
              backgroundColor: `${getRandomHexColor()}`,
            }}>
              <StatsLiSpan>{st.label}</StatsLiSpan>
              <StatsLiSpan className='percentage'>{st.percentage}%</StatsLiSpan>
            </StatsLi>;
          })}
        </StatsUl>
      </StatisticsWrapper>
    </StatisticsContainer>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number,
  })).isRequired,
};
