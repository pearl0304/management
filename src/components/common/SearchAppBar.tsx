import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import {Search, SearchIconWrapper, StyledInputBase} from "../../style/bar.styled.ts";
import {ReactNode, useState} from "react";
import Drawer from '@mui/material/Drawer';

import Avatar from '@mui/material/Avatar';

import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';

import CloseIcon from '@mui/icons-material/Close';

const drawerWidth = 280;

function DrawerHeader(props) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '16px',
      }}
    >
      <Typography variant="h6">내 정보</Typography>
      <IconButton onClick={props.onClose}>
        <CloseIcon/>
      </IconButton>
    </Box>
  );
}

export default function SearchAppBar() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const userData = {
    name: "Kylie",
    title: "연구원",
    contact: "010-1234-5678",
    responsibilities: "개발팀",
  };

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{mr: 2}}
            onClick={toggleDrawer}
          >
            <MenuIcon/>
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{flexGrow: 1, display: {xs: 'none', sm: 'block'}}}
          >
            MUI
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon/>
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{'aria-label': 'search'}}
            />
          </Search>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          mr: 2,
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
          },
        }}
        variant="persistent"
        anchor="left"
        open={isDrawerOpen}
        onClose={toggleDrawer}
      >
        <DrawerHeader onClose={toggleDrawer}/>
        <Divider/>
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '16px'}}>
          <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '16px'}}>
            <Avatar alt="User" src="링크 또는 이미지 경로" sx={{width: 100, height: 100}}/>
            <Typography variant="h6" sx={{marginTop: 1}}>{userData.name}</Typography>
          </Box>
          <Divider/>
          <Typography variant="body2" color="textSecondary"  sx={{marginTop: 1, marginLeft: 1}}>{userData.title}</Typography>
          <Typography variant="body2" color="textSecondary"  sx={{marginTop: 1, marginLeft: 1}}>{userData.contact}</Typography>
          <Typography variant="body2" color="textSecondary"  sx={{marginTop: 1, marginLeft: 1}}>{userData.responsibilities}</Typography>
        </Box>
        <Divider/>
        <Box sx={{display: 'flex', flexDirection: 'column', padding: '16px'}}>
          <Button variant="outlined" color="primary" sx={{marginBottom: '8px'}} fullWidth>
            환경설정
          </Button>
          <Button variant="outlined" color="secondary" fullWidth>
            로그아웃
          </Button>
        </Box>
      </Drawer>
    </Box>
  );
}