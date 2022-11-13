import styled from 'styled-components';

const Button = styled.label`
  position: fixed;
  top: 40px;
  left: 30px;
  width: 30px;
  height: 40px;
  cursor: pointer;
  z-index: 1;

  & > span,
  & > span::before,
  & > span::after {
    display: block;
    position: absolute;
    width: 100%;
    height: 3px;
    border-radius: 2px;
    background-color: #000000;
    transition-duration: .25s;
  }

  & > span::before {
    content: '';
    top: -8px;
  }

  & > span::after {
    content: '';
    top: 8px;
  }
`;

const MenuBox = styled.ul`
  display: block;
  position: fixed;
  top: 0;
  left: -100%;
  width: 250px;
  height: 100%;
  margin: 0;
  padding: 80px 0;
  list-style: none;
  background-color: #e2c3ff;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, .4);
  transition-duration: .25s;
`;

const DropDown = styled.div`
  position: relative;
  display: inline-block;
  &:hover ${MenuBox} {
    left: 0 !important;
  }
`
const MenuItem = styled.a`
  display: block;
  padding: 12px 24px;
  color: #333;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  font-weight: 600;
  text-decoration: none;
  transition-duration: .25s;

  &:hover {
    background-color: #CFD8DC;
  }
`;

export { Button, MenuBox, MenuItem, DropDown };
