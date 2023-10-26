import Avatar from '@mui/material/Avatar';
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";


const memberData = [
  {name: '회원 1', online: true},
  {name: '회원 2', online: false},
  {name: '회원 3', online: true},
];


export default function MemberList() {
  return (
    <List>
      {memberData.map((member, index) => (
        <ListItem key={index}>
          <ListItemAvatar>
            <Avatar style={{backgroundColor: member.online ? 'green' : 'gray'}}>
              {/* 여기에 프로필 이미지를 추가할 수 있습니다. */}
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={member.name} secondary={member.online ? '온라인' : '오프라인'}/>
        </ListItem>
      ))}
    </List>
  );

}