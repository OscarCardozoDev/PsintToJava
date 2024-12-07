import React from 'react';
import './hacerPagina.scss'
import Button from '@mui/material/Button';

import AddBoxIcon from '@mui/icons-material/AddBox';
import CodeIcon from '@mui/icons-material/Code';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import ListIcon from '@mui/icons-material/List';
import TableChartIcon from '@mui/icons-material/TableChart';
import TitleIcon from '@mui/icons-material/Title';

function CrearPagina() {

  return (
    <div className='crearPagina'>
        <PanelOpciones></PanelOpciones>
        <section className='agregarContenido'>
            <div className="agregarPanel">
                <AddBoxIcon></AddBoxIcon>
            </div>
        </section>
    </div>
  );
}

function PanelOpciones(){
    return(
        <section className='panelAgregar'>
            <ul>
                <h1>Agregar Opción</h1>
                <li className='btnAgregarOpcion'>
                <Button variant="contained" startIcon={<TitleIcon />}>
                    Titulo
                </Button>
                </li>
                <li className='btnAgregarOpcion'>
                <Button variant="contained" startIcon={<TitleIcon />}>
                    Subtitulo
                </Button>
                </li>
                <li className='btnAgregarOpcion'>
                <Button variant="contained" startIcon={<TextSnippetIcon />}>
                    Texto
                </Button>
                </li>
                <li className='btnAgregarOpcion'>
                <Button variant="contained" startIcon={<CodeIcon />}>
                    Codigo
                </Button>
                </li>
                <li className='btnAgregarOpcion'>
                <Button variant="contained" startIcon={<ListIcon />}>
                    Lista
                </Button>
                </li>
                <li className='btnAgregarOpcion'>
                <Button variant="contained" startIcon={<TableChartIcon />}>
                    Tabla
                </Button>
                </li>
            </ul>
        </section>
    );
}

export default CrearPagina;
