import React, { useState } from 'react'
import Editor from "./components/Editor"
import './App.css';

function App() {
  const [html, setHtml] = useState('')
  const [css, setCss] = useState('')
  const [javascript, setJavaScript] = useState('')

  return (
    <div className="app">
      <div className="pane top-pane">
        <Editor
          launguage="xml"
          label="HTML"
          value={html}
          onChange={setHtml}
        />
        <Editor
          launguage="css"
          label="CSS"
          value={css}
          onChange={setCss}
        />
        <Editor
          launguage="javascript"
          label="JavaScript"
          value={javascript}
          onChange={setJavaScript}
        />
      </div>
      <div className="bottom-pane">
        <iframe
          title="output"
          sandbox="allow scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        ></iframe>
      </div>
    </div>
  );
}

export default App;
