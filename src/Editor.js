import './Editor.css';
import Editor, {useMonaco} from '@monaco-editor/react';
import {useEffect, useState} from "react";
import {parseHypen, renderHypen} from "@hypen-lang/hypen-render-web";
import * as monaco from 'monaco-editor';
import {tokensProvider} from "./editor/tokenizationRules";
import {languageConfiguration} from "./editor/languageConfig";

function CodeEditor() {

    let [element, setElement] = useState(null)
    let txt = `module MyScreen(arg){
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

    function editorMount(monaco){
        monaco.languages.register({ id: 'hypen' });
        monaco.languages.setMonarchTokensProvider('hypen', tokensProvider);
        monaco.languages.setLanguageConfiguration('hypen', languageConfiguration);
        monaco.editor.defineTheme('hypen', {
            base: 'vs-dark',
            inherit: true,
            rules: [
                { token: 'module-keyword', foreground: 'FFA7E1' },
                { token: 'component-keyword', foreground: 'FFA7E1' },
                { token: 'pre-bracket', foreground: 'FFA7E1' },
                { token: `applicator`, foreground: 'FFECA7' },
                { token: 'comment', foreground: '888888' }, // Example: grey color for comments
            ],
            colors: {
                'editor.foreground': '#F8F8F8',
            }
        });
    }
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
          renderHypen(data.output, el)
      }, (error) => {
          console.log("Got error", error)
      })
        } catch (e) {

        }

  }
  return (
    <div className="editor">
      <Editor height="50vh" width="60vw"

        defaultLanguage="hypen" theme="hypen"
        onChange={handleEditorChange}
        beforeMount={editorMount}
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
