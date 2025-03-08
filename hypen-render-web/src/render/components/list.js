const {mapApplicatorsToStyle} = require("../applicatorToCssMapping");
const Hypen = (require('../../hypen-kotlin/kotlin/hypen-kotlin.js').space.hypen.parser.combinators)

function render(instance, parent, renderChildren, renderRow, renderColumn){
    console.assert(instance instanceof Hypen.ComponentUsage)
    console.assert(instance.name.text.toLowerCase() === "list")

    let listDirection = instance.arguments.argFor('direction', 1)
    const gap = instance.arguments.argFor('gap', 2)
    if (listDirection === undefined || listDirection == null) {
        listDirection = 'vertical'
    }

    const list = document.createElement('div')
    list.style.display = 'flex' // Set display to flex
    if (listDirection === 'vertical') {
        list.style.flexDirection = 'column' // Set flex direction to row
    } else {
        list.style.flexDirection = 'row' // Set flex direction to row
    }

    list.style.gap = gap
    list.style.flexWrap = 'nowrap'
    list.style.whiteSpace = 'wrap'
    list.style.overflow = 'scroll'
    list.style.scrollHeight = 'none'
    list.style.scrollWidth = 'none'

    let kids = renderChildren(instance.block, parent)
    kids.forEach((child) => {
        list.appendChild(child)
    })
    mapApplicatorsToStyle(instance,parent,list)
    console.log("Rendered List", list)
    return list
}

module.exports = {
    renderList: render
}
