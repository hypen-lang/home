const {mapApplicatorsToStyle} = require("../applicatorToCssMapping");
const Hypen = (require('../../hypen-kotlin/kotlin/hypen-kotlin.js').space.hypen.parser.combinators)

function render(instance, parent, renderChildren){
    console.assert(instance instanceof Hypen.ComponentUsage)
    console.assert(instance.name.text.toLowerCase() === "row")
    const column = document.createElement('div')
    column.classList.add('row')
    column.style.display = 'flex' // Set display to flex
    column.style.flexDirection = 'row' // Set flex direction to row
    let kids = renderChildren(instance.block, parent)
    kids.forEach((child) => {
        column.appendChild(child)
    })
    mapApplicatorsToStyle(instance,parent,column)
    return column
}
module.exports = {
    renderRow: render
}
