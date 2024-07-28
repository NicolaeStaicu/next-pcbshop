import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { brand, gray, green } from '@/theme';

function stringAvatar(name: string) {
  return {
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}

const userTestimonials = [
  {
    avatar: <Avatar sx={{bgcolor: brand[500]}} {...stringAvatar('Ion Popescu')} />,
    name: 'Ion Popescu',
    occupation: 'Inginer senior',
    testimonial:
      "Colaborarea cu Cătălin a fost excelentă. Proiectele noastre de PCB au fost finalizate la timp și au depășit așteptările noastre în ceea ce privește calitatea și funcționalitatea.",
  },
  {
    avatar: <Avatar sx={{bgcolor: green[500]}} {...stringAvatar('Maria Ionescu')} />,
    name: 'Maria Ionescu',
    occupation: 'Inginer Șef',
    testimonial:
      "Cătălin ne-a ajutat să dezvoltăm un PCB complex pentru un nou produs. Expertiza și atenția la detalii au fost de neegalat, iar suportul tehnic a fost mereu disponibil.",
  },
  {
    avatar: <Avatar sx={{bgcolor: gray[500]}} {...stringAvatar('Andrei Georgescu')} />,
    name: 'Andrei Georgescu',
    occupation: 'Manager Proiect',
    testimonial:
      "Am avut nevoie de un PCB personalizat într-un timp foarte scurt. Cătălin a livrat nu doar rapid, dar și cu o calitate impecabilă. Recomand cu încredere serviciile lui.",
  }
];

export default function Testimonials() {
  return (
    <Container
      id="testimonials"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Box
        sx={{
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        <Typography component="h2" variant="h4" color="text.primary">
          Păreri clienți
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Colaborarea cu clienții mei este esențială pentru succesul fiecărui proiect de proiectare PCB.
          Iată câteva dintre mărturiile celor care au beneficiat de serviciile mele.
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {userTestimonials.map((testimonial, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex' }}>
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                flexGrow: 1,
                p: 1,
              }}
            >
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {testimonial.testimonial}
                </Typography>
              </CardContent>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  pr: 2,
                }}
              >
                <CardHeader
                  avatar={testimonial.avatar}
                  title={testimonial.name}
                  subheader={testimonial.occupation}
                />
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}