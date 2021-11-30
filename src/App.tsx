import React, { useState ,useEffect} from 'react';
import axios from 'axios'

import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
  return { name, calories, fat, carbs, protein };
}

type TCoin = {
  name: string,
  fullname: string,
  ImgUrl: string,
  price: number,
  volume24Hour: number,
}

function App() {
  const [allCoins, setAllCoins] = useState<TCoin[]>([])

  useEffect(() => {
    axios.get('https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD').then(({data}) => {
      const coins: TCoin[] = data.Data.map((coin: any) => {
        const obj: TCoin = {
          name: coin.CoinInfo.Name,
          fullname: coin.CoinInfo.FullName,
          ImgUrl: `https://www.cryptocompare.com/${coin.CoinInfo.ImageUrl}`,
          price: coin.RAW.USD.PRICE.toFixed(3),
          volume24Hour: parseInt(coin.RAW.USD.VOLUME24HOUR),
        }

        return obj
      })
      setAllCoins(coins)
    })
  }, [])

  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <Paper>
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
                  {allCoins.map((coin) => (
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
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper style={{padding: 15}}>
            <div style={{display: 'flex', alignItems: 'center', marginBottom: 20}}>
              <FormControl>
                <TextField fullWidth label='Валюта' />
              </FormControl>
              <FormControl>
                <Select value={10}>
                  <MenuItem value={10}>Десять</MenuItem>
                  <MenuItem value={1}>Один</MenuItem>
                  <MenuItem value={5}>Пять</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div style={{display: 'flex', alignItems: 'center', marginBottom: 20}}>
              <FormControl>
                <TextField fullWidth label='Валюта' />
              </FormControl>
              <FormControl>
                <Select value={10}>
                  <MenuItem value={10}>Десять</MenuItem>
                  <MenuItem value={1}>Один</MenuItem>
                  <MenuItem value={5}>Пять</MenuItem>
                </Select>
              </FormControl>
            </div>
            <Typography variant="h5" component="h4" style={{display: 'flex', justifyContent: 'center'}}>
              h1. Heading
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
