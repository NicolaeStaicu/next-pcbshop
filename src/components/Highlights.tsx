import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import PaymentsIcon from '@mui/icons-material/Payments';
import WarehouseIcon from '@mui/icons-material/Warehouse';

const items = [
  {
    icon: <SettingsSuggestRoundedIcon />,
    title: 'Miniaturizare',
    description:
      'PCB-urile permit reducerea dimensiunilor dispozitivelor electronice, făcându-le ideale pentru aplicații unde spațiul este limitat, cum ar fi electronicele de consum și dispozitivele medicale portabile.',
  },
  {
    icon: <ConstructionRoundedIcon />,
    title: 'Fiabilitate',
    description:
      'Un PCB bine proiectat asigură conexiuni electrice stabile și durabile, reducând riscul defecțiunilor și prelungind durata de viață a dispozitivelor.',
  },
  {
    icon: <WarehouseIcon />,
    title: 'Producție în Masă',
    description:
      'PCB-urile sunt esențiale pentru producția în masă a dispozitivelor electronice, oferind consistență și eficiență în procesul de fabricație.',
  },
  {
    icon: <AllInclusiveIcon />,
    title: 'Flexibilitate',
    description:
      'Cu opțiuni de design flexibil, PCB-urile pot fi adaptate pentru o gamă largă de aplicații, de la simple circuite de control până la sisteme complexe de comunicații.',
  },
  {
    icon: <PaymentsIcon />,
    title: 'Reducerea Costurilor',
    description:
      'Utilizarea PCB-urilor poate reduce costurile de producție prin simplificarea asamblării și reducerea numărului de componente necesare.',
  },
  {
    icon: <QueryStatsRoundedIcon />,
    title: 'Performanță Electromagnetică',
    description:
      'PCB-urile sunt proiectate pentru a minimiza interferențele electromagnetice, asigurând performanța optimă a circuitelor electronice.',
  },
];

export default function Highlights() {
  return (
    <Box
      id="highlights"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: 'white',
        bgcolor: '#06090a',
      }}
    >
      <Container
        sx={{
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
          <Typography component="h2" variant="h4">
            Puncte Cheie
          </Typography>
          <Typography variant="body1" sx={{ color: 'grey.400' }}>
            Descoperă beneficiile esențiale ale utilizării PCB-urilor în proiectele tale.
            Aceste puncte principale evidențiază avantajele majore și utilitatea plăcuțelor PCB, de la miniaturizare și fiabilitate, până la flexibilitate și performanță electromagnetică.
            Fiecare aspect este gândit pentru a îmbunătăți eficiența, a reduce costurile și a asigura calitatea înaltă a produselor tale electronice.
          </Typography>
        </Box>
        <Grid container spacing={2.5}>
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Stack
                direction="column"
                color="inherit"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  p: 3,
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'grey.800',
                  background: 'transparent',
                  backgroundColor: 'grey.900',
                }}
              >
                <Box sx={{ opacity: '50%' }}>{item.icon}</Box>
                <div>
                  <Typography fontWeight="medium" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'grey.400' }}>
                    {item.description}
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}