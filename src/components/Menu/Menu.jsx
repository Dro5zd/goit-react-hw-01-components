import React from 'react';
import { Button, MenuBox, MenuItem, DropDown } from './Menu.styles';

export const Menu = () => {
  return (
    <DropDown>
      <Button htmlFor='menu__toggle'>
        <span></span>
      </Button>
      <MenuBox>
        <li><MenuItem href='#profile'>Profile</MenuItem></li>
        <li><MenuItem href='#statistics'>Statistics</MenuItem></li>
        <li><MenuItem href='#friendsList'>Friends List</MenuItem></li>
        <li><MenuItem href='#transactionHistory'>Transaction History</MenuItem></li>
      </MenuBox>
    </DropDown>
  );
};
