import {SetStateAction, useState} from "react";
import {
  Paper,
  TableBody,
  TableHead,
  TablePagination,
} from "@mui/material";
import {
  MemberWrapper,
  StyledTable,
  StyledTableCell,
  StyledTableContainer, StyledTableRow,
  Title,
  Top,
  Wrapper
} from "../../style/member.styled.ts";


export default function MemberMain() {
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowPerPage] = useState<number>(10);

  const handleChangePage = (_event: never, newPage: SetStateAction<number>) => {
    setPage(newPage)
  };

  const handleChangeRowsPerPage = (event: { target: { value: string; }; }) => {
    setRowPerPage(parseInt(event.target.value, 10));
    setPage(0)
  }

  const memberList = [
    {
      name: 'Kylie',
      id: 'kylie_03',
      memberCode: 'YB2301',
      gender: '여',
      position: '연구원',
      contact: '010-1234-5678',
      entryDate: '2023-01-09'
    }
  ];

  return (
    <MemberWrapper>
      <Wrapper>
        <Top>
          <Title>
            <h1>Member List</h1>
          </Title>
          <StyledTableContainer component={Paper}>
            <StyledTable>
              <TableHead>
                <StyledTableRow>
                  <StyledTableCell align="center">이름</StyledTableCell>
                  <StyledTableCell align="center">아이디</StyledTableCell>
                  <StyledTableCell align="center">회원번호</StyledTableCell>
                  <StyledTableCell align="center">성별</StyledTableCell>
                  <StyledTableCell align="center">직급</StyledTableCell>
                  <StyledTableCell align="center">연락처</StyledTableCell>
                  <StyledTableCell align="center">입사일자</StyledTableCell>
                </StyledTableRow>
              </TableHead>
              <TableBody>
                {memberList.slice(page * rowsPerPage, (page + 1) * rowsPerPage).map((member, index) => (
                  <StyledTableRow key={index}>
                    <StyledTableCell>{member.name}</StyledTableCell>
                    <StyledTableCell>{member.id}</StyledTableCell>
                    <StyledTableCell>{member.memberCode}</StyledTableCell>
                    <StyledTableCell>{member.gender}</StyledTableCell>
                    <StyledTableCell>{member.position}</StyledTableCell>
                    <StyledTableCell>{member.contact}</StyledTableCell>
                    <StyledTableCell>{member.entryDate}</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </StyledTable>
          </StyledTableContainer>
        </Top>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={memberList.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />

      </Wrapper>
    </MemberWrapper>
  )
}