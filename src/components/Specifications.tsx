import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, styled, tableCellClasses } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
  pcbElement: string,
  options: string,
  details: string,
) {
  return { pcbElement, options, details };
}

const rows = [
  createData('Nr. straturi', '1 - 20', '-'),
  createData('Material', 'FR-4', 'Kingboard: KB-6160 A/B/C Nan Ya: UV Block FR-4-86 / NP-140F / NP-140R / NP-140TL'),
  createData('Dimensiuni maxime', '400 x 500mm', '-'),
  createData('Toleranță dimesiune (outline)', '+/- 0,2 mm', '+/- 0,2 mm frezare +/- 0,2 mm v-cut (crestare)'),
  createData('Mască lipire', 'verde, roșu, alb, galben, albastru, negru, violet', 'mască lipire tip lac'),
  createData('Grosime pcb', '0,4 – 2,5 mm', '0,4 / 0,6 / 0,8 / 1,0 / 1,2 / 1,6 / 2,0 / 2,5'),
  createData('Toleranță grosime PCB LP > 1,0 mm', '+/- 10%', 'dacă grosimea nominală a PCB-ului este de 1,5 mm, o toleranță de ± 10% înseamnă că grosimea reală a PCB-ului poate varia între 1,35 mm și 1,65 mm. Această variație respectă standardele de calitate, asigurând performanța și fiabilitatea plăcii PCB'),
  createData('Toleranță grosime PCB LP < 1,0 mm', '+/- 0,1 mm', 'dacă grosimea nominală a PCB-ului este de 0,6 mm, o toleranță de ± 0,1 mm înseamnă că grosimea reală a PCB-ului poate varia între 0,5 mm și 0,7 mm, respectând totuși specificațiile tehnice și standardele de calitate'),
  createData('Grosime strat cupru exterior', '35µm sau 70µm', '-'),
  createData('Grosime cupru straturi interne', '17µm', '-'),
  createData('Grosime traseu', '3.5 mil / 0,09mm', '-'),
  createData('Distanță între trasee', '3.5 mil / 0,09mm', '-'),
  createData('Diametru găuri', 'min. 0,2 mm, max. 6,3 mm', '-'),
  createData('Distanță vias-traseu', '5,0 mil / 0,127 mm', '-'),
  createData('Anular ring', '3.5 mil / 0,09mm', '-'),
  createData('Toleranțe găuri', '+/- 0,08 mm', '-'),
  createData('Grosime minimă inscripționare', '> 6 mil / 0,15 mm', '-'),
  createData('Înălțime minimă inscripționare', '> 32 mil / 0,8 mm', '-'),
  createData('Grosime minimă mască lipire', '> 4 mil / 0,1 mm ( la verde)', '-'),
  createData('Distanță pad – mască de lipire', 'min. 2 mil / 0,05 mm', '-'),
  createData('Distanță minimă traseu – outline', '> 0,2 mm', '> 0,2 mm la frezare / > 0,4 mm la V-Cut'),
];

export default function Specifications() {
  return (
    <Container
      id="specifications"
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
          width: { sm: '100%', md: '65%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        <Typography component="h2" variant="h4" color="text.primary">
          Specificații Tehnice
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Pentru a asigura performanța și durabilitatea plăcuțelor PCB, este esențial să fie respectate specificațiile tehnice detaliate.
          Mai jos găsești un tabel cu informații esențiale despre construcția PCB-urilor, incluzând detalii despre straturi, materiale, grosimi și alte caracteristici tehnice.
          Aceste specificații sunt cruciale pentru a garanta că proiectul tău respectă cele mai înalte standarde de calitate și fiabilitate.
        </Typography>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell width='20%' align="left">Element PCB</StyledTableCell>
              <StyledTableCell width='20%' align="left">Opțiuni</StyledTableCell>
              <StyledTableCell width='20%' align="left">Detalii</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.pcbElement}>
                <StyledTableCell component="th" scope="row">
                  {row.pcbElement}
                </StyledTableCell>
                <StyledTableCell align="left">{row.options}</StyledTableCell>
                <StyledTableCell align="left">{row.details}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}