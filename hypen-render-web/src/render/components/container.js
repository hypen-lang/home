const {mapApplicatorsToStyle} = require("../applicatorToCssMapping");
const Hypen = (require('../../hypen-kotlin/kotlin/hypen-kotlin.js').space.hypen.parser.combinators)

function render(instance, parent, renderChildren){
    console.assert(instance instanceof Hypen.ComponentUsage)
    console.assert(instance.name.text.toLowerCase() === "container")
    const column = document.createElement('div')
    column.classList.add('container')
    let kids = renderChildren(instance.block, parent)
    kids.forEach((child) => {
        column.appendChild(child)
    })
    mapApplicatorsToStyle(instance,parent,column)
    console.log("Rendered column", column)
    return column
}

module.exports = {
    renderContainer: render
}
