import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Avatar } from "@mui/material";
import BlogBtn from "./BlogBtn";
import { AuthContext } from "../../../../Providers/AuthProvider";

const columns = [
  { id: "image", label: "Image", minWidth: 170 },
  { id: "title", label: "Title", minWidth: 100 },
  { id: "blog", label: "Blog", minWidth: 170 },
  { id: "btn", label: "btn", minWidth: 170 },
  
];

export default function DashboardBlogs() {
  const { blogs } = React.useContext(AuthContext);

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
    <div>
      <h2 className="text-xl md:text-4xl font-bold text-center mt-4 mb-12">All Blogs</h2>
      <Paper sx={{ width: "90vw", overflow: "hidden" }}>
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
            {blogs
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((blog) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={blogs._id}
                  >
                    {columns.map((column) => {
                      const value = blog[column.id];
                      return (
                        <>
                          {column.id === "image" ? (
                            <TableCell key={column.id} align={column.align}>
                              <Avatar alt="image" src={value} />
                            </TableCell>
                          ) : column.id === "title" ? (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === "number"
                                ? column.format(value)
                                : value}
                            </TableCell>
                          ): column.id === "btn" ? (
                            <TableCell key={column.id} align={column.align}>
                              <BlogBtn status = {blog.status} id={blog._id}/> 
                            </TableCell>
                          ) :(
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === "number"
                                ? column.format(value)
                                : value.slice(0, 40)}
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
        count={blogs.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    </div>
  );
}
