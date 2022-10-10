import { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

import { listProduct } from '../apiRequest/crudFunc';

export const TableProducts = () => {

  const [list, setList] = useState([])

  useEffect(() => {
    listProduct().then((response) => {
      setList(response)
    }).catch(error => { console.log(error) })
  }, [])

  const columns = [
    { id: 'name', label: 'Nome' },
    { id: 'dateF', label: 'Data Fabricação' },
    { id: 'dateV', label: 'Data Validade' },
    { id: 'perishable', label: 'Perecível' },
    { id: 'price', label: 'Preço(R$)' },
  ];

  const ordenation = (id) => {
    setList([...list].sort((a, b) => {
      if (a[id] < b[id]) {
        return -1
      } else {
        return true
      }
    }))
  }


  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <div className="table-content">
        <Paper>
          <TableContainer>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                    >
                      <span onClick={() => { ordenation(column.id) }} className="column-text">
                        {column.label}
                      </span>
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {list.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.name}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.id === "perishable"? (value? "Sim" : "Não") : value}
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
            rowsPerPageOptions={[10]}
            component="div"
            count={list.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </div>
    </>
  )
}
