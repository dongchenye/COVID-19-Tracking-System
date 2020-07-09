import React from 'react';
import PropTypes from 'prop-types';
import {lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import FilterListIcon from '@material-ui/icons/FilterList';
import JSONdata from "../../data.json";
// import TextField from '@material-ui/core/TextField';
// import Autocomplete from '@material-ui/lab/Autocomplete';

var dataCollectTime=JSONdata.Date;
var rows = JSONdata.US_location;
rows.forEach(row=>{
  row.display=true;
});
var data=rows;
function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

const headCells = [
  { id: 'State', numeric: false, disablePadding: false, label: 'State' },
  { id: 'County', numeric: false, disablePadding: false, label: 'County' },
  { id: 'Confirmed', numeric: true, disablePadding: false, label: 'Confirmed' },
  { id: 'Deaths', numeric: true, disablePadding: false, label: 'Deaths' },
  { id: 'Recovered', numeric: true, disablePadding: false, label: 'Recovered' },
];

function EnhancedTableHead(props) {
  const { classes, order, orderBy, onRequestSort } = props;
  const createSortHandler = property => event => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map(headCell => (
          <TableCell
            key={headCell.id}
            align={'left'}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  // numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles(theme => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: '1 1 100%',
  },
}));

const EnhancedTableToolbar = props => {
  const classes = useToolbarStyles();
  // const { numSelected } = props;

  return (
    <Toolbar>
      
    <Typography className={classes.title} variant="h3" id="tableTitle">
        State Reported Cases <span style={{fontSize: '15px'}}>(Updated by {dataCollectTime})</span>
    </Typography>
    <Tooltip title="Filter list">
        <IconButton aria-label="filter list">
        <FilterListIcon />
        </IconButton>
    </Tooltip>
    
    </Toolbar>
  );
};

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    fontSize: '15px'
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
    fontSize: '15px'
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
    fontSize: '15px'
  },
}));

export default function EnhancedTable() {
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('Alabama');
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  // var [data, setData] = React.useState(rows);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  // function handleFilter (e){
  //   var chooseState=e.target.value;
  //   rows.forEach(row=>{
  //     if (row.State===chooseState){
  //       row.display=true;
  //     }else{
  //       row.display=false;
  //     }
  //   });
  //   var newdata=rows.filter(row=>row.display===true);
  //   setData(newdata);
    
  // }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  data=rows.filter(row=>row.display===true);
  const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);
  // const states=JSONdata.comfirmed_state_list;
  
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <EnhancedTableToolbar />
          {/* <Autocomplete
            id="filter"
            options={states}
            getOptionLabel={(option) => option}
            style={{ width: 150, padding: "10px"}}
            autoHighlight
            renderInput={(params) => <TextField {...params} label="Choose a state" variant="outlined" onChange={handleFilter}/>}
          /> */}

        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={data.length}
            />
            <TableBody>
              {stableSort(data, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  return (
                    <TableRow style={{fontSize: "15px"}} 
                      hover
                      key={index}
                    >
                      <TableCell >{row.State}</TableCell>
                      <TableCell >{row.County}</TableCell>
                      <TableCell >{row.Confirmed}</TableCell>
                      <TableCell >{row.Deaths}</TableCell>
                      <TableCell >{row.Recovered}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 70 * emptyRows,fontSizeAdjust:"20px" }}>
                  <TableCell colSpan={10} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}
