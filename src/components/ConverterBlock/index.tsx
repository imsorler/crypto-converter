import React from 'react'

import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

const ConverterBlock = () => {
  return (
    <>
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
    </>
  )
}

export default ConverterBlock
