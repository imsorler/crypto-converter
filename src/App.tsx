import React from 'react';

import { CryptoTable, ConverterBlock } from './components';

import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const App = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <Paper>
            <CryptoTable />
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
