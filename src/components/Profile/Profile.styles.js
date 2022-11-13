import styled from 'styled-components';

const ProfileContainer = styled.section`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileWrapper = styled.div`
  min-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  background-color: #ffffff;
  padding-top: 50px;
  border-radius: 8px;
  box-shadow: 5px 5px 7px 0 rgba(136, 136, 136, 0.3);
  overflow: hidden
`;

const ProfileDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;

const DescriptionP = styled.p`
  margin-bottom: 20px;
  color: grey;

  &.name {
    color: inherit;
    font-weight: bold;
    font-size: 30px;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  background-color: aliceblue;
  border-radius: 50%;
  margin-bottom: 50px;
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
  background-color: #efefef;
  border-top: 1px solid grey;
  border-right: 1px solid grey;

  &:last-child {
    border-right: none;
  }
`;

const StatsLiSpan = styled.span`
  margin-bottom: 10px;
  color: grey;

  &.quantity {
    color: inherit;
    margin-bottom: 0;
    font-size: 25px;
    font-weight: bold;
  }
`;

export {
  StatsLi,
  DescriptionP,
  ProfileContainer,
  ProfileDescription,
  ProfileImage,
  ProfileWrapper,
  StatsLiSpan,
  StatsUl,
};
