const {mapApplicatorsToStyle, valueFromArgument} = require("../applicatorToCssMapping");
const {applyCanvasApplicators} = require("./canvas/applicators");
const Hypen = (require('../../hypen-kotlin/kotlin/hypen-kotlin.js').space.hypen.parser.combinators)

function render(instance, parent){
    console.assert(instance instanceof Hypen.ComponentUsage)
    console.assert(instance.name.text.toLowerCase() === "canvas")

    const canvas = document.createElement('canvas')
    let ctx = canvas.getContext('2d');
    mapApplicatorsToStyle(instance, parent, canvas)
    renderCanvasChildren(ctx, instance.block.components)
    return canvas
}

function renderCanvasComponent(ctx, component){
    console.assert(component instanceof Hypen.ComponentUsage)
    switch (component.name.text.toLowerCase()){
        case "rect":
            ctx.save()
            let rect = {
                x: valueFromArgument(component.argFor('x', 0)),
                y: valueFromArgument(component.argFor('y', 1)),
                width: valueFromArgument(component.argFor('width', 2)),
                height: valueFromArgument(component.argFor('height', 3))
            }
            applyCanvasApplicators(ctx, component, rect)
            ctx.fillRect(rect.x, rect.y, rect.width, rect.height)
            transformCanvasContext(ctx, rect)
            if(component.block != null && component.block.components != null)
            renderCanvasChildren(ctx, component.block.components)
            ctx.restore()
            break
        case "circle":
            ctx.save()
            applyCanvasApplicators(ctx, component)
            ctx.arc(
                valueFromArgument(component.argFor('x', 0)),
                valueFromArgument(component.argFor('y', 1)),
                valueFromArgument(component.argFor('radius', 2)),
                valueFromArgument(component.argFor('startAngle', 3)),
                valueFromArgument(component.argFor('endAngle', 4)),
                valueFromArgument(component.argFor('counterclockwise', 5))
            )
            ctx.restore()
            ctx.fillStyle = "black"
            ctx.strokeStyle = "black"
            break
        default:
            console.log("Unknown component type", component.constructor.name)
            return null
    }
}
function renderCanvasChildren(ctx, children){
    children.forEach((comp) => {
        renderCanvasComponent(ctx, comp)
    })
}

function transformCanvasContext(ctx, rect) {
    if (ctx) {
        ctx.translate(rect.x, rect.y);
        ctx.scale(ctx.width/rect.width, ctx.height/rect.height);
    } else {
        console.error("Canvas not supported by the browser.");
    }
}


module.exports = {
    renderCanvas: render
}
