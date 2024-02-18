import * as React from 'react';
import { styled } from '@mui/material/styles';

import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import Typography from '@mui/material/Typography';

import IconButton from '@mui/material/IconButton';
import { Menu } from '@mui/icons-material';

// const drawerWidth = 240;
interface HeaderBarProps {
  open: boolean;
  handleDrawerOpen: () => void;
}

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>`
  z-index: 1201;
  background: #fff;
  height: 70px;
  box-shadow: inset 0 -1px 0 0 #dadce0;
`;
const Heading = styled(Typography)`
  color: #5f6368;
  font-size: 24px;
  margin-left: 25px;
`;
const HeaderBar: React.FC<HeaderBarProps> = ({ open, handleDrawerOpen }) => {
  const logo = 'https://seeklogo.com/images/G/google-keep-logo-0BC92EBBBD-seeklogo.com.png';
  return (
    <AppBar open={open}>
      <Toolbar>
        <IconButton
          onClick={handleDrawerOpen}
          edge='start'
          sx={{
            marginRight: '20px',
          }}
        >
          <Menu />
        </IconButton>
        <img src={logo} alt='logo' style={{ width: 30 }} />
        <Heading>Keep</Heading>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderBar;
