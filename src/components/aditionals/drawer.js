import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

// Componente principal de la aplicación que contiene un Drawer
export default function AnchorTemporaryDrawer() {
  // Estado del componente, se utiliza para controlar si el Drawer está abierto o cerrado en cada dirección (top, left, bottom, right)
  const [state, setState] = React.useState({
    right: false
  });

  // Función que controla la apertura y cierre del Drawer
  // Toma como parámetros la dirección (anchor) y si se debe abrir/cerrar (open)
  const toggleDrawer = (anchor, open) => (event) => {
    // Si se presiona 'Tab' o 'Shift' mientras el Drawer está abierto, no se cierra automáticamente
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    // Actualiza el estado del Drawer (por ejemplo, abre o cierra el Drawer en la dirección especificada)
    setState({ state, [anchor]: open });
  };

  // Función que define el contenido que se mostrará dentro del Drawer
  const list = (anchor) => (
    <Box
      sx={{ width: '18vw'}}
      role="navigation" // Define el propósito del contenedor (para mejorar accesibilidad)
      onClick={toggleDrawer(anchor, false)} // Cierra el Drawer al hacer clic en cualquier parte de su contenido
      onKeyDown={toggleDrawer(anchor, false)} // Cierra el Drawer al presionar una tecla dentro del mismo
    >
      {/* Lista de elementos dentro del Drawer */}
      <List>
        {/* Map recorre un arreglo de textos y genera un ítem por cada uno */}
        {['Variables', 'Simbolos', 'If', 'For Each'].map((text, index) => (
          <ListItem key={text} disablePadding> {/* Crea cada ListItem sin padding adicional */}
            <ListItemButton> {/* Cada ítem es un botón que puede ser clickeado */}
              <ListItemIcon>
                {/* Alterna entre dos íconos dependiendo del índice (par o impar) */}
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} /> {/* Muestra el texto dentro del ítem */}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider /> {/* Agrega un divisor visual entre secciones de la lista */}
    </Box>
  );

  return (
    <div>
      {/* Mapea una lista con las direcciones del Drawer y crea un botón para cada una */}
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          {/* Botón que abre el Drawer */}
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          {/* Componente Drawer, que muestra el contenido deslizante */}
          <Drawer
            anchor={anchor} // Define de qué lado de la pantalla aparece el Drawer (derecha en este caso)
            open={state[anchor]} // Define si el Drawer está abierto o cerrado
            onClose={toggleDrawer(anchor, false)} // Controla el evento de cierre del Drawer
          >
            {list(anchor)} {/* Inserta el contenido del Drawer */}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}