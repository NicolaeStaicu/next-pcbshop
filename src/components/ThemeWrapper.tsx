'use client'

import { useEffect, useState, createContext, ReactNode, useContext } from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { PaletteMode } from '@mui/material';
import getTheme from '@/theme';

interface ThemeWrapperProps {
  children: ReactNode;
}

export const ThemeContext = createContext<{
  mode: PaletteMode;
  toggleColorMode: () => void;
}>({
  mode: 'light',
  toggleColorMode: () => {},
});

export default function ThemeWrapper({ children }: ThemeWrapperProps) {
  const [mode, setMode] = useState<PaletteMode>('light');

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const theme = createTheme(getTheme(mode));

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <ThemeContext.Provider value={{ mode, toggleColorMode }}>
        {children}
      </ThemeContext.Provider>
    </MuiThemeProvider>
  );
}