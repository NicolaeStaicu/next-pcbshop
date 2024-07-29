import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import MemoryIcon from '@mui/icons-material/Memory';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import BadgeIcon from '@mui/icons-material/Badge';
import TagIcon from '@mui/icons-material/Tag';
import GavelIcon from '@mui/icons-material/Gavel';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person2Outlined';
import { brand } from '@/theme';
import { Card, CardContent, CardHeader, FormControl, TextField } from '@mui/material';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" mt={1}>
      {'Copyright © '}
      <Link href="/">PCBShop&nbsp;</Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Container
      id='footer'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 4, sm: 8 },
        py: { xs: 8, sm: 10 },
        textAlign: { sm: 'center', md: 'left' },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          width: '100%',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
            minWidth: { xs: '100%', sm: '40%' },
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <MemoryIcon fontSize="large" sx={{ color: brand[500] }}></MemoryIcon>
            <Typography variant="subtitle2" fontWeight={600}>PCBShop</Typography>
          </Box>
          <Card variant='outlined' sx={{ width: '100%' }}>
            <CardHeader sx={{ paddingBottom: '0px' }} title='Detalii contact'></CardHeader>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <EmailIcon fontSize="large" sx={{ color: brand[500] }}></EmailIcon>
                <Typography variant="subtitle2" fontWeight={600}>
                  contact@pcbshop.ro
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <PhoneIcon fontSize="large" sx={{ color: brand[500] }}></PhoneIcon>
                <Typography variant="subtitle2" fontWeight={600}>
                  0765010106
                </Typography>
              </Box>
            </CardContent>
          </Card>
          <Card variant='outlined' sx={{ width: '100%' }}>
            <CardHeader sx={{ paddingBottom: '0px' }} title='Date firmă'></CardHeader>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <BadgeIcon fontSize="large" sx={{ color: brand[500] }}></BadgeIcon>
                <Typography paddingTop={'0.6rem'} variant="subtitle2" fontWeight={600}>
                  S.C Sample Shop PCB S.R.L
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <TagIcon fontSize="large" sx={{ color: brand[500] }}></TagIcon>
                <Typography variant="subtitle2" fontWeight={600}>
                  RO45686317 (CIF)
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <GavelIcon fontSize="large" sx={{ color: brand[500] }}></GavelIcon>
                <Typography variant="subtitle2" fontWeight={600}>
                  J3/463/2022 (Nr. Reg. Com.)
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <HomeIcon fontSize="large" sx={{ color: brand[500] }}></HomeIcon>
                <Typography paddingTop={'0.2rem'} variant="subtitle2" fontWeight={600}>
                  Str. Stefan Ciobanu nr.66, Pitești, Argeș
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Box>
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'column',
            gap: 1,
            minWidth: { xs: '100%', sm: '50%' },
          }}
        >
          <Card sx={{ height: '100%' }}>
            <CardHeader title='Trimite-mi un mesaj'></CardHeader>
            <CardContent>
              <FormControl className='w-full'>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <PersonIcon fontSize="large" sx={{ color: brand[500] }} />
                  <TextField hiddenLabel fullWidth id="input-full-name" label="Nume și Prenume" variant="outlined" />
                </Box>
              </FormControl>
            </CardContent>
          </Card>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          pt: { xs: 4, sm: 8 },
          width: '100%',
          borderTop: '1px solid',
          borderColor: 'divider',
        }}
      >
        <div>
          <Copyright />
        </div>
        <a className="px-3" href="https://www.flaticon.com/free-icons/pcb" title="pcb icons">Icon by surang - Flaticon</a>
      </Box>
    </Container>
  );
}