import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableContainer,
  TableRow,
  Paper
} from '@mui/material'

interface TableViewProps {
  headers: Array<string>;
  rows: Array<Array<any>>;
};

export default function TableView({ headers, rows }: TableViewProps) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="table-view">
        <TableHead>
          <TableRow>
            {headers.map((header, index) => (
              <TableCell key={index}>
                {header}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {row.map((entry, _index) =>
                _index !== 0 ? (
                  <TableCell key={_index}>
                    {entry}
                  </TableCell>
                ) : (
                  <TableCell component="th" scope="row" key={_index}>
                    {entry}
                  </TableCell>
                )
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

