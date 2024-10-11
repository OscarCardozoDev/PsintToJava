import React, { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { java } from '@codemirror/lang-java'; 
import { materialLight } from '@uiw/codemirror-theme-material'; 

const CodeEditor = () => {
  const [code, setCode] = useState('// Escribe tu código en Java aquí');

  
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}> {/* Contenedor centrado */}
      <CodeMirror
        value={code}
        height="auto"
        width="75%"
        justify-content="center"
        theme={materialLight}
        extensions={[java()]}
        onChange={(value) => {
          setCode(value);
        }}
      />
    </div>
  );
};

export default CodeEditor;
