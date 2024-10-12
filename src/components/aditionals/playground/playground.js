import Editor from '@monaco-editor/react';
import { CodeBlock, dracula } from 'react-code-blocks';

export function ReadPlayground({ type, code }) {
  const show = "//"+type+"\n" + code

  return (
    <div className='editorCode'>
      <CodeBlock
        theme={dracula}
        language="javascript"
        text={show}
      />
    </div>
  );
}

export function Playground() {
  return (
    <div className='editorCode'>
      <Editor
        height="10vh"
        width="40vw"
        theme="vs-dark"
        defaultLanguage="java"
        defaultValue="// Escribe tu código aquí"
      />
    </div>
  );
}
