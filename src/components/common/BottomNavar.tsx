import {useState} from "react";
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CampaignIcon from '@mui/icons-material/Campaign';

export default function BottomNavBar() {
  const [value, setValue] = useState(0);

  return (
    <Box>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Member" icon={<PeopleAltIcon/>}/>
        <BottomNavigationAction label="Time" icon={<AccessTimeIcon/>}/>
        <BottomNavigationAction label="Calendar" icon={<CalendarMonthIcon/>}/>
        <BottomNavigationAction label="Notice" icon={<CampaignIcon/>}/>
      </BottomNavigation>
    </Box>
  );
}