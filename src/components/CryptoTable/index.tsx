import React, {FC} from 'react'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { TCoin } from '../../types';

interface ICryptoTable {
  items: TCoin[]
}


const CryptoTable: FC<ICryptoTable> = ({items}) => {
  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell></TableCell>
          <TableCell align="left">Icon</TableCell>
          <TableCell align="left">Name</TableCell>
          <TableCell align="left">Fullname</TableCell>
          <TableCell align="left">Price</TableCell>
          <TableCell align="left">24/h</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {!items.length ? 'Загрузка...' : items.map((coin) => (
          <TableRow key={coin.name} sx={{ '&:last-child td, &:last-child th': { border: 0} }}>
            <TableCell component="th" scope="row">
              {coin.name}
            </TableCell>
            <TableCell align="left">{<img style={{width: 40, height: 40, borderRadius: 30}} src={coin.ImgUrl} alt={`${coin.name} icon`}/>}</TableCell>
            <TableCell align="left">{coin.name}</TableCell>
            <TableCell align="left">{coin.fullname}</TableCell>
            <TableCell align="left">$ {coin.price}</TableCell>
            <TableCell align="left">$ {coin.volume24Hour}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default CryptoTable
