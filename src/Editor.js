import './Editor.css';
import Editor, {useMonaco} from '@monaco-editor/react';
import {useEffect, useState} from "react";
import {parseHypen, renderHypen, renderHypenElement} from "@hypen-lang/hypen-render-web";
import * as monaco from 'monaco-editor';

function CodeEditor() {

    let [element, setElement] = useState(null)
    let txt = `module Component(arg){
        // A module is a collection of components with a common state
        Column {
            // Applicators are used to apply styles to components
            Text("Hello World")
                .color(#FFECA7)
                .fontWeight(bold)
                .fontSize(20)
            Row {
                Text("Welcome to").color(white)
                Text("Hypen").color(pink).padding(20)
                Canvas {
                    Rect(20,20,500,500){
                        Rect(20,20,50,50).color(blue)
                    }.color(red)
                }
            }
        }.backgroundColor("#161616").width(50).height(50)
    }`
    let [text, setTxt] = useState(txt)
    useEffect(() => {
        parseAndRender(txt, document.getElementById("hypenapp"))
        let el = document.getElementById("hypenapp")
        setElement(el)
    }, [true])

  function handleEditorChange(value, event) {
    console.log('value', value);
    let el = element
    parseAndRender(value, el)
    }

  function parseAndRender(input,el){
        try {
            let el = document.getElementById("hypenapp")
            parseHypen(input, (data)=>{
          console.log("Got data", data)
          renderHypenElement(data.output, el)
      }, (error) => {
          console.log("Got error", error)
      })
        } catch (e) {

        }

  }
  return (
    <div className="editor">
      <Editor height="50vh" width="40vw"
        defaultLanguage="css" theme="vs-dark"
        onChange={handleEditorChange}
        defaultValue={txt}
              options={{
                  minimap: { enabled: false },
                  scrollbar: {
                      vertical: 'hidden',
                      horizontal: 'hidden',
                  },
                  semanticHighlighting: false,
                  renderValidationDecorations: "off",
                  diagnostics: {
                      noSemanticValidation: true,
                      noSyntaxValidation: true,
                  },
                  scrollBeyondLastLine: false,
              }}

      />
        <div style={{height: "100%", width: "100%", background: "#121212"}}>
        <div id="hypenapp"></div>
        </div>

    </div>
  );
}

export default CodeEditor;
