import SearchAppBar from "../../components/common/SearchAppBar.tsx";
import BottomNavBar from "../../components/common/BottomNavar.tsx";
import MemberList from "../../components/memberList.tsx";
import Calendar from "./calendar.tsx";

export default function Home() {
  return (
    <div>
      <SearchAppBar/>
      <MemberList/>
      <Calendar/>
      <BottomNavBar/>
    </div>
  )
}