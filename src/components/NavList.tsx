import * as React from 'react';

import List from '@mui/material/List';

import ListItem from '@mui/material/ListItem';

import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import {
  LightbulbOutlined as LightBulb,
  ArchiveOutlined as Archive,
  DeleteOutline as Delete,
} from '@mui/icons-material';
import { Link, NavLink } from 'react-router-dom';

interface NewListProps {
  open: boolean;
}
interface navListType {
  id: number;
  name: string;
  icon: JSX.Element;
  route: string;
}

const NavList: React.FC<NewListProps> = ({ open }) => {
  const navList: navListType[] = [
    { id: 1, name: 'Notes', icon: <LightBulb />, route: '/' },
    { id: 2, name: 'Archive', icon: <Archive />, route: '/archive' },
    { id: 3, name: 'Trash', icon: <Delete />, route: '/delete' },
  ];
  return (
    <>
      <List>
        {navList.map((list) => (
          <ListItem key={list.id}>
            <NavLink
              className={({ isActive }) => (isActive ? 'active' : '')}
              to={list.route}
              style={{ textDecoration: 'none', display: 'flex', color: 'inherit' }}
            >
              <ListItemIcon style={{ alignItems: 'center' }} color='primary'>
                {list.icon}
              </ListItemIcon>
              <ListItemText primary={list.name} sx={{ opacity: open ? 1 : 0 }} />
            </NavLink>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default NavList;
