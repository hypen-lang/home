const {mapApplicatorsToStyle} = require("../applicatorToCssMapping");
const Hypen = (require('../../hypen-kotlin/kotlin/hypen-kotlin.js').space.hypen.parser.combinators)

function render(instance, parent){
    console.assert(instance instanceof Hypen.ComponentUsage)
    console.assert(instance.name.text === "Text")
    const text = document.createElement('div')
    let txtArgument = instance.arguments.find((arg) => {
        let property = arg.value
        let isTextNamed = (arg instanceof Hypen.Argument) && (arg.name!= null) && arg.name === "text"
        if(isTextNamed){
            return isTextNamed
        } else return (property.value instanceof Hypen.QuotedString)
    })
    let extracted = txtArgument.value.value.text
    text.innerText = extracted
    mapApplicatorsToStyle(instance, parent, text)
    return text
}

module.exports = {
    renderText: render
}
