import React, { useState, useEffect } from 'react'
import Editor from "./components/Editor"
import useLocalStorage from "./hooks/useLocalStorage"
import io from "socket.io-client";

const socket = io.connect("http://localhost:5000");

function App() {
  const [html, setHtml] = useLocalStorage('html', '')
  const [css, setCss] = useLocalStorage('css', '')
  const [javascript, setJavascript] = useLocalStorage('javascript', '')
  const [srcDoc, setSrcDoc] = useState('')

  const updateCode = () => {
    socket.emit('updateCode', { html, css, javascript })
  }

  useEffect(() => {
    socket.on('updateCode', (payload) => {
      setHtml(payload.html);
      setCss(payload.css);
      setJavascript(payload.javascript)
    })
  }, [])

  useEffect(() => {
    // const timeout = setTimeout(() => {
    setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${javascript}</script>
        </html>
      `);
    updateCode();
    // }, 250)
    // console.log(srcDoc)
    // return () => clearTimeout(timeout)
  }, [html, css, javascript])

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
          onChange={setJavascript}
        />
      </div>
      <div className="bottom-pane">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        ></iframe>
      </div>
    </div>
  );
}

export default App;
