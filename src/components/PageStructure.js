import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import theme from './ui/Theme';
import HeaderDrawerMain from './HeaderDrawerMain';

export default function PageStructure() {
  return (
    <ThemeProvider theme={theme}>
      <HeaderDrawerMain/>
    </ThemeProvider>
  )
}
