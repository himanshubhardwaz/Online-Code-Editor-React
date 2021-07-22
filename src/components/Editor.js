import React, { useState } from 'react'
import { Controlled as CodeMirror } from 'react-codemirror2'
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml"
import "codemirror/mode/javascript/javascript"
import "codemirror/mode/css/css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExpandAlt } from '@fortawesome/free-solid-svg-icons'
import "../index.css"

const Editor = (props) => {
    const { launguage, label, value, onChange } = props

    const handleChange = (editor, data, value) => {
        onChange(value)
    }

    const handleClick = () => {
        console.log("clicked")
    }

    return (
        <div className="editor-container">
            <div className="editor-title">
                {label}
                <button onClick={() => handleClick()} style={{ border: 'none' }}>
                    <FontAwesomeIcon icon={faExpandAlt} />
                </button>
            </div>
            <CodeMirror
                value={value}
                className="code-mirror-wrapper"
                onBeforeChange={handleChange}
                options={{
                    lineWrapping: true,
                    lint: true,
                    mode: launguage,
                    lineNumbers: true,
                    theme: "material"
                }}
            />
        </div>
    )
}

export default Editor
