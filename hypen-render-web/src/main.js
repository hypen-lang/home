const {renderCenter} = require("./render/components/center");
const {renderImage}  = require("./render/components/image");
const {renderContainer}  = require("./render/components/container");
const {renderCanvas}  = require("./render/components/canvas");

const assert = console.assert;
const {renderText} = require("./render/components/text");
const {renderColumn} = require("./render/components/column");
const {renderRow} = require("./render/components/row");
const {renderList} = require("./render/components/list");

const Hypen = (require('./hypen-kotlin/kotlin/hypen-kotlin.js').space.hypen.parser.combinators)


function renderBlock(block , parent){
  assert(block instanceof Hypen.Block)
  let res =  block.components.map((comp) => {
    return renderComponent(comp, parent)
  })
    return res
}

function renderModule(input) {
    console.assert(input instanceof Hypen.Module)
    let result = renderBlock(input.block, input)
    return result
}


function renderComponent(input,parent) {
  console.assert(input instanceof Hypen.ComponentUsage)
  switch (input.name.text.toLowerCase()) {
    case "text":
      let res = renderText(input,parent)
        return res
    case "image":
      return renderImage(input)
     case "container":
          return renderContainer(input, parent, renderBlock)
      case "row":
      return renderRow(input, parent, renderBlock)
    case "column":
      return renderColumn(input, parent, renderBlock)
    case "center":
      return renderCenter(input, parent, renderBlock)
    case "list":
      return renderList(input, parent, renderBlock, renderRow, renderColumn)
      case "canvas":
          return renderCanvas(input, parent)
      default:
        console.log("Unknown component")
  }
  return undefined;
}

export function renderHypen(input){
    let element = document.getElementById("hypenapp")
    let child
  switch (input.constructor) {
      case Hypen.Module:
             child = renderModule(input)
          break;
        case Hypen.ComponentDefinition:
            child =  renderBlock(input.block)
            break;
     case Hypen.ComponentUsage:
         child = renderComponent(input)
         break;
      default:
   }
    function returnFirstIfArray(input) {
        if (Array.isArray(input) && input.length > 0) {
            return input[0];
        }
        return input;
    }
    let newEl = returnFirstIfArray(child)
    if(newEl === undefined){
        console.log("Parsing failed")
        return
    }
    if(element.children.length===0){
        element.appendChild(newEl)
    }else {
        let selected = element.children[0]
        selected.replaceWith(newEl)
    }
}

export function parseHypen(text, success, failure) {
  const parser = new Hypen.HypenParser()
  const res = parser.parse(text)
  if(res instanceof Hypen.Success) {
    success(res)
  } else {
      failure(res)
}}
