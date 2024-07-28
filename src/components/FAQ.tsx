import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function FAQ() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Container
      id="faq"
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
      <Typography
        component="h2"
        variant="h4"
        color="text.primary"
        sx={{
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        Întrebări Frecvente
      </Typography>
      <Box sx={{ width: '100%' }}>
        <Accordion
          expanded={expanded === 'panel1'}
          onChange={handleChange('panel1')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1d-content"
            id="panel1d-header"
          >
            <Typography component="h3" variant="subtitle2">
              1. Cât durează procesul de proiectare al unui PCB?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
            >
              Timpul necesar pentru proiectarea unui PCB variază în funcție de complexitatea proiectului.
              În general, pentru un proiect simplu, procesul poate dura între 1 și 2 săptămâni.
              Proiectele mai complexe pot necesita 3 până la 4 săptămâni sau mai mult.
              Te voi ține informat pe tot parcursul procesului și voi lucra pentru a respecta termenele stabilite.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel2'}
          onChange={handleChange('panel2')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2d-content"
            id="panel2d-header"
          >
            <Typography component="h3" variant="subtitle2">
              2. Ce informații sunt necesare pentru a începe un proiect de PCB?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
            >
              Pentru a începe un proiect, am nevoie de specificațiile detaliate ale circuitului, schema electrică, lista de componente (BOM) și orice alte cerințe speciale pe care le ai.
              Dacă nu ai toate aceste informații, putem discuta despre nevoile tale și te pot ghida prin procesul de colectare a datelor necesare.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel3'}
          onChange={handleChange('panel3')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3d-content"
            id="panel3d-header"
          >
            <Typography component="h3" variant="subtitle2">
              3. Oferi suport și după finalizarea proiectului?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
            >
              Da, ofer suport tehnic și după finalizarea proiectului.
              Voi fi disponibil pentru a răspunde la orice întrebări sau pentru a rezolva eventualele probleme care pot apărea.
              Scopul meu este să mă asigur că ești complet mulțumit de produsul final și că acesta funcționează conform așteptărilor tale.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel4'}
          onChange={handleChange('panel4')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4d-content"
            id="panel4d-header"
          >
            <Typography component="h3" variant="subtitle2">
              4. Pot solicita modificări după ce proiectul a fost finalizat?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
            >
              Da, înțeleg că pot apărea schimbări sau ajustări necesare după finalizarea proiectului.
              Pot efectua modificări, însă acestea pot implica costuri suplimentare în funcție de complexitatea și amploarea schimbărilor solicitate.
              Vom discuta despre orice ajustări necesare și îți voi oferi o estimare a costurilor și a timpului necesar pentru a le implementa.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Container>
  );
}