import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

// const columns = [
//     { id: 'name', label: 'Amount', minWidth: 170 ,
//     format: (value) => value.toLocaleString('en-US')},
//     { id: 'code', label: 'Commisions', minWidth: 100 ,format: (value) => value.toLocaleString('en-US')},
//     {
//         id: 'population',
//         label: 'Earnings',
//         minWidth: 170,
//         align: 'right',
//         format: (value) => value.toLocaleString('en-US'),
//     },
//     {
//         id: 'size',
//         label: 'Payment Date',
//         minWidth: 170,
//         align: 'right',
//         format: (value) => value.toLocaleString('en-US'),
//     },
//     {
//         id: 'status',
//         label: 'Status',
//         minWidth: 170,
//         format: (value) => value.toLocaleString('en-US'),
        
//     },
// ];

function createData(name, code, population, size ,status) {
   
    return { name, code, population, size, status};
}

// const rows = [
//     createData('8.50$',"18.5$","18.5$","Sept-11-2022","pending"),
//     createData('8.50$',"18.5$","18.5$","Sept-11-2022","completed"),
//     createData('8.50$',"18.5$","18.5$","Sept-11-2022","pending"),
//     createData('8.50$',"18.5$","18.5$","Sept-11-2022","pending"),
//     createData('8.50$',"18.5$","18.5$","Sept-11-2022","completed"),
//     createData('8.50$',"18.5$","18.5$","Sept-11-2022","pending"),
//     createData('8.50$',"18.5$","18.5$","Sept-11-2022","completed"),
//     createData('8.50$',"18.5$","18.5$","Sept-11-2022","pending"),
//     createData('8.50$',"18.5$","18.5$","Sept-11-2022","completed"),
//     createData('8.50$',"18.5$","18.5$","Sept-11-2022","pending"),
// ];
export default function StickyHeadTable(props) {
  var rows=[];
  rows=props?.prop?.values.map((item)=>{
    return createData(item.ammount,item.commision,item.earning,item.date,item.status)
  })
    
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

  
var columns=[]
columns=props?.prop?.sticky.map((item)=>{
 return { id:item, label: item, minWidth: 170 ,
  format: (value) => value.toLocaleString('en-US')}
})

 
console.log(columns)

 
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}