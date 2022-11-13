import React from 'react';
import { Input, Label, MenuBox, MenuItem } from './Menu.styles';

export const Menu = () => {
  return (
    <div className='hamburger-menu'>
      <Input id='menu__toggle'/>
      <Label htmlFor='menu__toggle'>
        <span></span>
      </Label>

      <MenuBox>
        <li><MenuItem href='#profile'>Profile</MenuItem></li>
        <li><MenuItem href='#statistics'>Statistics</MenuItem></li>
        <li><MenuItem href='#friendsList'>Friends List</MenuItem></li>
        <li><MenuItem href='#transactionHistory'>Transaction History</MenuItem></li>
      </MenuBox>
    </div>
  );
};
