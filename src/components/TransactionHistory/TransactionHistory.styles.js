import styled from 'styled-components';

const TransactionHistoryContainer = styled.section`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d0d0d0;
  padding: 100px;
`;

const TransactionHistoryWrapper = styled.table`
  min-width: 800px;
  font-size: 20px;
  background-color: white;
  box-shadow: 5px 5px 7px 0 rgba(136, 136, 136, 0.3);
  border-collapse: collapse;
  color: grey;
  & th {
    height: 70px;
    background-color: #03ccf3;
    color: white;
    border-right: 1px solid #ffffff;

    &:last-child {
      border-right: none;
    }
  }

  & td {
    padding: 15px;
    text-align: center;
    border: 1px solid #eaeaea;
  }

  & tr:nth-child(even) {
    background-color: #f3f3f3;
  }
`;

export { TransactionHistoryContainer, TransactionHistoryWrapper };

