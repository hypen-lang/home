import {valueFromArgument} from "../../applicatorToCssMapping";

const applicatorHandlers = {
    color: applyColor,
    stroke: applyStroke,
};

export function applyCanvasApplicators(ctx, component,rect) {
    component.applicators.forEach((applicator) => {
        const handler = applicatorHandlers[applicator.name.text];
        if (handler) {
            handler(ctx,component,rect);
        }
    });
}

function applyColor(ctx, component,rect) {
    const fill = component.applicators.find((it) => it.name.text === 'color');
    if (typeof fill !== 'undefined') {
        ctx.fillStyle = valueFromArgument(fill.arguments.argFor('color', 0));
    }
}

function applyStroke(ctx, component, rect) {
    const fill = component.applicators.find((it) => it.name.text === 'stroke');
    if (typeof fill !== 'undefined') {
        ctx.strokeStyle = valueFromArgument(fill.arguments.argFor('color', 0));
        ctx.strokeRect(rect.x,rect.y, rect.width, rect.height);
    }
}

