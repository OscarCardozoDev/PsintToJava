import React, { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { java } from '@codemirror/lang-java'; // Importa el lenguaje Java
import { materialLight } from '@uiw/codemirror-theme-material'; // Puedes usar cualquier tema disponible

const MyCodeEditor = () => {
  const [code, setCode] = useState('// Escribe tu código en Java aquí');

  
  return (
    <CodeMirror
      value={code}
      height="200px"
      theme={materialLight}
      extensions={[java()]} // Usa la extensión de Java
      onChange={(value) => {
        setCode(value);
      }}
    />
  );
};

export default MyCodeEditor;
