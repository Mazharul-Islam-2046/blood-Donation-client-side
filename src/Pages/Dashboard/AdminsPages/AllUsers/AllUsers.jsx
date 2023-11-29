import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { AuthContext } from "../../../../Providers/AuthProvider";
import { Avatar } from "@mui/material";
import PositionedMenu from "./Components/PositionedMenu";

const columns = [
  { id: "image", label: "Image", minWidth: 170 },
  { id: "email", label: "Email", minWidth: 100 },
  { id: "name", label: "Name", minWidth: 170 },
  {
    id: "status",
    label: "Staus",
    minWidth: 170,
    align: "right",
  },
  {
    id: "menu",
    label: "Menu",
    minWidth: 170,
    align: "right",
  },
];

export default function AllUsers() {
  const { allUsers } = React.useContext(AuthContext);

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
            {allUsers
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((allUser) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={allUsers._id}
                  >
                    {columns.map((column) => {
                      const value = allUser[column.id];
                      return (
                        <>
                          {column.id === "image" ? (
                            <TableCell key={column.id} align={column.align}>
                              <Avatar alt="image" src={value} />
                            </TableCell>
                          ) : column.id === "menu" ? (
                            <TableCell key={column.id} align={column.align}>
                              <PositionedMenu status = {allUser.status} id={allUser._id}/> 
                            </TableCell>
                          ) : (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === "number"
                                ? column.format(value)
                                : value}
                            </TableCell>
                          )}
                        </>
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
        count={allUsers.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
