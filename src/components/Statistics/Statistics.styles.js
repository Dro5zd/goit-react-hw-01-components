import styled from 'styled-components';

const StatisticsContainer = styled.section`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StatisticsWrapper = styled.div`
  min-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 5px 5px 7px 0 rgba(136, 136, 136, 0.3);
  overflow: hidden
`;

const StatisticsTitle = styled.h2`
  padding: 30px;
`;

const StatsUl = styled.ul`
  display: flex;
  flex-direction: row;
`;

const StatsLi = styled.li`
  width: 134px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //border-top: 1px solid grey;
`;

const StatsLiSpan = styled.span`
  margin-bottom: 10px;
  color: white;

  &.percentage {
    margin-bottom: 0;
    font-size: 25px;
    font-weight: bold;
  }
`;

export { StatsLi, StatisticsContainer, StatisticsTitle, StatisticsWrapper, StatsLiSpan, StatsUl };

