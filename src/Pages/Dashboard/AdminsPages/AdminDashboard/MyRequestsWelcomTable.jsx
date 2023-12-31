import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Link } from "react-router-dom";
import AllBloodDonationBtn from "../AllBloodDonationPage/AllBloodDonationBtn";
import DonationStausChangeBtn from "../AllBloodDonationPage/DonationStatusChangeBtn";
import { AuthContext } from "../../../../Providers/AuthProvider";

const columns = [
  { id: "recipentName", label: "Recipent Name", minWidth: 170 },
  { id: "requesterEmail", label: "Recipent Email", minWidth: 100, align: "center" },
  { id: "donationDate", label: "Donation Date", minWidth: 170, align:"center" },
  {
    id: "status",
    label: "Donation Staus",
    minWidth: 170,
    align: "center",
  },
  {
    id: "donorName",
    label: "Donor Name",
    minWidth: 170,
    align: "center",
  },
  {
    id: "donorEmail",
    label: "Donor Email",
    minWidth: 170,
    align: "center",
  },
  {
    id: "viewDetails",
    label: "View Details",
    minWidth: 170,
    align: "center",
  },
  {
    id: "menu",
    label: "Menu",
    minWidth: 170,
    align: "right",
  },
];

export default function MyRequestsWelcomTable() {

    const {myReqs} = React.useContext(AuthContext)
    console.log(myReqs);

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
    <Paper sx={{ width: "70vw", overflow: "hidden", mx: "auto" }}>
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
            {myReqs
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((myReq) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={myReqs._id}
                  >
                    {columns.map((column) => {
                      const value = myReq[column.id];
                      return (
                        <>
                          {column.id === "viewDetails" ? (
                            <TableCell key={column.id} align={column.align}>
                              <Link to={`/dashBoard/req-details/${myReq._id}`}>Veiw Details</Link>
                            </TableCell>
                          ) : column.id === "menu" ? (
                            <TableCell key={column.id} align={column.align}>
                              <AllBloodDonationBtn id={myReq._id}/> 
                            </TableCell>
                          ) : column.id === "status" ? (
                            <TableCell key={column.id} align={column.align}>
                              {
                                value === "pending" ? value :
                                value === "inprogress" ? <DonationStausChangeBtn id={myReq._id} value={value}/> : value

                              }
                            </TableCell>
                          ) : (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === "number"
                                ? column.format(value)
                                : value}
                            </TableCell>
                          )
                        }
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
        count={myReqs.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
