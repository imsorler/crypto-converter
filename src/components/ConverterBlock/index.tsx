import React from 'react'
import { observer, inject } from 'mobx-react'
import CurrenciesStore from '../../stores/currenciesStore'

import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

type IConverterBlock = {
  currenciesStore?: CurrenciesStore
}

const ConverterBlock: React.FC<IConverterBlock> = inject('currenciesStore')(observer(({ currenciesStore }) => {
  const coins: string[] = currenciesStore!.getItems.map(coin => coin.name)

  return (
    <>
      <div style={{display: 'flex', alignItems: 'center', marginBottom: 20}}>
        <FormControl>
          <TextField fullWidth label='Валюта' />
        </FormControl>
        <FormControl>
          <Select value={coins[0]}>
            {
              coins.map(name => <MenuItem value={name}>{name}</MenuItem>)
            }
          </Select>
        </FormControl>
      </div>
      <div style={{display: 'flex', alignItems: 'center', marginBottom: 20}}>
        <FormControl>
          <TextField fullWidth label='Валюта' />
        </FormControl>
        <FormControl>
        <Select value={coins[0]}>
            {
              coins.map(name => <MenuItem value={name}>{name}</MenuItem>)
            }
          </Select>
        </FormControl>
      </div>
    </>
  )
}))


export default ConverterBlock
