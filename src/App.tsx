import React, { useState ,useEffect} from 'react';
import axios from 'axios'

import { CryptoTable, ConverterBlock } from './components';

import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import { TCoin } from './types';

const App = () => {
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

  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <Paper>
            <CryptoTable items={allCoins} />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper style={{padding: 15}}>
            <ConverterBlock />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
