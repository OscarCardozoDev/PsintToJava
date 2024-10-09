import React from 'react';
import './../../scss/variables.scss'
import language from '../lenguages/textsSpanish.json'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

function Variables() {
  // Datos de comparación entre Psint y Java
  const variableData = [
    { type: 'Entero', psint: 'int', java: 'int' },
    { type: 'Real/Float', psint: 'real', java: 'float / double' },
    { type: 'Cadena de texto', psint: 'cadena', java: 'String' },
    { type: 'Carácter', psint: 'caracter', java: 'char' },
    { type: 'Booleano', psint: 'logico', java: 'boolean' }
  ];

  return (
    <div className='variablesMain'>
    <h1 className='title'>{language.variables.title}</h1>
        <div className='main'>
            <section className="descriptionSec">
                <Typography className="description" variant="body1">
                    {language.variables.description}
                </Typography>
            </section>
            <section className="tableSec">
                <Typography className='subtitle tableSub'>
                    {language.variables.subtitles.variablesCompare}
                </Typography>
                <TableContainer component={Paper} sx={{ maxWidth: 600, margin: 'auto', marginTop: 4 }}>
                    <Table>
                        <TableHead>
                        <TableRow>
                            {/* Encabezado de la tabla */}
                            <TableCell align="center" variant="head"><strong>Tipo de Variable</strong></TableCell>
                            <TableCell align="center" variant="head"><strong>Psint</strong></TableCell>
                            <TableCell align="center" variant="head"><strong>Java</strong></TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {/* Renderizado de filas con datos */}
                        {variableData.map((row, index) => (
                            <TableRow key={index}>
                            <TableCell align="center">{row.type}</TableCell>
                            <TableCell align="center">{row.psint}</TableCell>
                            <TableCell align="center">{row.java}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </section>
            <section className="typeSec">
                <Typography className='subtitle tiposSub'>
                    {language.variables.subtitles.type}
                </Typography>
                <ul className="typeLs">
                {Object.entries(language.variables.types).map(([key, value]) => (
                    <Typography key={key} className='variable-type'>
                        <br></br>
                        <li><strong>{key}:</strong></li>
                        {value}
                    </Typography>
                ))}
                </ul>
            </section>
        </div>
    </div>
  );
}

export default Variables;
