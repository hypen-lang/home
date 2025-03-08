const {mapApplicatorsToStyle} = require("../applicatorToCssMapping");
const Hypen = (require('../../hypen-kotlin/kotlin/hypen-kotlin.js').space.hypen.parser.combinators)

function render(instance, parent, renderChildren){
    console.assert(instance instanceof Hypen.ComponentUsage)
    console.assert(instance.name.text.toLowerCase() === "column")
    const column = document.createElement('div')
    column.classList.add('column')
    let kids = renderChildren(instance.block, parent)
    kids.forEach((child) => {
        column.appendChild(child)
    })
    mapApplicatorsToStyle(instance,parent,column)
    return column
}

module.exports = {
    renderColumn: render
}
