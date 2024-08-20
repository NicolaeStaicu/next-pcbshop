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
import MessageIcon from '@mui/icons-material/Message';
import SendIcon from '@mui/icons-material/Send';
import LoadingButton from '@mui/lab/LoadingButton';
import { brand } from '@/theme';
import { Alert, AlertColor, Card, CardActions, CardContent, CardHeader, Slide, SlideProps, Snackbar, SnackbarOrigin, TextField } from '@mui/material';
import emailjs from '@emailjs/browser';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" mt={1}>
      {'Copyright © '}
      <Link href="/">PCBShop&nbsp;</Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

function SlideTransition(props: SlideProps) {
  return <Slide {...props} direction="left" />;
}

interface State extends SnackbarOrigin {
  open: boolean;
  severity: AlertColor;
  message: string
}

export default function Footer() {
  const [state, setState] = React.useState<State>({
    open: false,
    vertical: 'top',
    horizontal: 'right',
    severity: 'success',
    message: ''
  });
  const [showSnackBar, setShowSnackBar] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState(false);
  const { vertical, horizontal, open, severity, message } = state;
  const form = React.useRef();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);
    if (e.target.checkValidity()) {
      if (form.current) {
        emailjs.sendForm('service_7q4i4fh', 'template_735dpmg', form.current, {
          publicKey: 'QRLTschR8MDDzMoo3',
        }).then(
          () => {
            setLoading(false);
            setShowSnackBar(true);
            setState(
              {
                vertical: 'top',
                horizontal: 'right',
                open: true,
                severity: 'success',
                message: 'Mesajul a fost trimis cu succes!'
              });
          },
          (error) => {
            setLoading(false);
            setShowSnackBar(true);
            setState(
              {
                vertical: 'top',
                horizontal: 'right',
                open: true,
                severity: 'error',
                message: error.text
              });
          },
        );
      }
    } else {
      setShowSnackBar(true);
      setLoading(false);
      setState(
        {
          vertical: 'top',
          horizontal: 'right',
          open: true,
          severity: 'error',
          message: 'Vă rugăm să completați toate câmpurile cu steluță!'
        });
    }
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

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
          gap: { xs: 4, sm: 0 },
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
          <Box sx={{ display: 'flex', alignItems: 'center', padding: '1rem', paddingBottom: 0, paddingLeft: '10px' }}>
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
            display: 'flex',
            flexDirection: 'column',
            minWidth: { xs: '100%', sm: '55%' },
          }}
        >
          <Card sx={{ height: '100%' }}>
            <CardHeader title='Trimite-mi un mesaj'></CardHeader>
            <CardContent>
              <Box component='form' ref={form} onSubmit={handleSubmit} noValidate className='w-full'>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                  <PersonIcon fontSize="large" sx={{ color: brand[500], paddingBottom: '2px' }} />
                  <TextField type='text' name='name' required hiddenLabel fullWidth id="input-full-name" label="Nume și Prenume" variant="outlined" />
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                  <EmailIcon fontSize="large" sx={{ color: brand[500], paddingBottom: '2px' }} />
                  <TextField type='text' name='email' required hiddenLabel fullWidth id="input-email" label="Email" variant="outlined" />
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                  <PhoneIcon fontSize="large" sx={{ color: brand[500], paddingBottom: '2px' }} />
                  <TextField type='text' name='phone' hiddenLabel fullWidth id="input-phone" label="Telefon" variant="outlined" />
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'top', gap: '0.5rem', height: '100%' }}>
                  <MessageIcon fontSize="large" sx={{ color: brand[500], marginTop: '0.7rem' }} />
                  <TextField type='text' name='message' required hiddenLabel multiline fullWidth id="input-message" label="Mesaj" variant="outlined" rows={6} />
                </Box>
                <CardActions sx={{ padding: 0, paddingTop: '8px' }} className='justify-end'>
                  <LoadingButton type='submit' loading={loading} variant='outlined' startIcon={<SendIcon />}>
                    Trimite
                  </LoadingButton>
                </CardActions>
              </Box>
              {showSnackBar ?
                <Snackbar
                  anchorOrigin={{ vertical, horizontal }}
                  open={open}
                  autoHideDuration={3000}
                  onClose={handleClose}
                  TransitionComponent={SlideTransition}
                >
                  <Alert
                    onClose={handleClose}
                    severity={severity}
                    variant="filled"
                    sx={{ width: '100%' }}
                  >
                    {message}
                  </Alert>
                </Snackbar>
                :
                null
              }
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