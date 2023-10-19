import {styled} from '@mui/system';
import {TableContainer, Table, TableCell, TableRow} from "@mui/material";

export const MemberWrapper = styled('div')({
  background: '#f5f5f5',
  display: "flex",
  justifyContent: "center",
  alignItems: 'center',
})

export const Wrapper = styled('div')({
  background: '#fff',
  borderRadius: '8px',
  boxShadow: '0 2px 4ox rgba(0,0,0,0.1)',
  width: '80%',
  padding: '20px',
  marginTop: '20px',
});

export const Top = styled('div')({
  textAlign: 'center'
});

export const Title = styled('div')({
  borderBottom: '2px solid #000',
  h1: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#000',
    margin: '20px 0',
  }
});

export const StyledTableContainer = styled(TableContainer)({
  maxHeight: '600px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  borderRadius: '8px'
});

export const StyledTable = styled(Table)({
  minWidth: 800,
  border: '1px solid #e0e0e0',
  borderCollapse: 'collapse',
});

export const StyledTableCell = styled(TableCell)({
  fontWeight: 'bold',
  color: '#000',
  padding: '16px',
  textAlign: 'center',
  borderBottom: '1px solid #e0e0e0',
});

export const StyledTableRow = styled(TableRow)({
  '&:nth-of-type(odd)': {
    backgroundColor: 'transparent !important',
  },
});