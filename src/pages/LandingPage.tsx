'use client'

import { PaletteMode } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Hero from '@/components/Hero';
import Highlights from '@/components/Highlights';
import Pricing from '@/components/Pricing';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import getTheme from '@/theme';
import AppNavBar from '@/components/AppNavBar';
import { useState } from 'react';

export default function LandingPage() {
  const [mode, setMode] = useState<PaletteMode>('light');
  const LPtheme = createTheme(getTheme(mode));

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeProvider theme={LPtheme}>
      <CssBaseline />
      <AppNavBar mode={mode} toggleColorMode={toggleColorMode} />
      <Hero />
      <Box sx={{ bgcolor: 'background.default' }}>
        <Features />
        <Divider />
        <Testimonials />
        <Divider />
        <Highlights />
        <Divider />
        <Pricing />
        <Divider />
        <FAQ />
        <Divider />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}