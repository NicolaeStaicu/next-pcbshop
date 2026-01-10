'use client'

import { useContext } from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Hero from '@/components/Hero';
import Highlights from '@/components/Highlights';
import Specifications from '@/components/Specifications';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import AppNavBar from '@/components/AppNavBar';
import Scroll from '@/components/ScrollButton';
import { ThemeContext } from '@/components/ThemeWrapper';

export default function LandingPage() {
  const { mode, toggleColorMode } = useContext(ThemeContext);

  return (
    <>
      <AppNavBar mode={mode} toggleColorMode={toggleColorMode} />
      <Hero />
      <Box sx={{ bgcolor: 'background.default' }}>
        <Features />
        <Divider />
        <Testimonials />
        <Divider />
        <Highlights />
        <Divider />
        <Specifications />
        <Divider />
        <FAQ />
        <Divider />
        <Footer />
      </Box>
      <Scroll showBelow={250} />
    </>
  );
}
