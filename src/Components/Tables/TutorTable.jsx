import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import OptionLIst from "../UI/OptionLIst";
import styled from "styled-components";
export default function StickyHeadTable({ column, row, options }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead >
            <TableRow >
              {column &&
                column.map(({ name, label }, index) => (
                  <TableCell key={index} style={{ minWidth: "max-content" ,maxWidth:"250px" }}>
                    {label}
                  </TableCell>
                ))}
              {options && (
                <TableCell style={{ minWidth: "max-content" ,maxWidth:"250px" }}  >Options</TableCell>
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            

            
            {row
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row,index) => {
                return (
                  <TableRow tabIndex={-1} key={index}>
                    {column.map((column,index) => {
                      return <TableCell key={index}>{row[column.name]}</TableCell>;
                    })}
                    {options && (
                      <TableCell>
                        <NewOptionList>
                          <OptionLIst options={options} />
                        </NewOptionList>
                      </TableCell>
                    )}
                    <TableCell />
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={row.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

const NewOptionList = styled.div`
  display: flex;
  flex-direction: row;
`;
