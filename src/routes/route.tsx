import {RouteObject} from 'react-router-dom';
import Home from './home/home.tsx';
import Login from "./login.tsx";
import MemberMain from "./member/memberMain.tsx";
import EnrollMember from "./member/enrollMember.tsx";


const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home/>,
  },
  {
    path: '/login',
    element: <h1>ddddd</h1>
  },
  {
    path: '/member',
    element: <h1>dfdf</h1>,
    children: [
      {
        path: "/enroll",
        element: <h1>sfsdf</h1>
      }
    ]
  }
];
export default routes;