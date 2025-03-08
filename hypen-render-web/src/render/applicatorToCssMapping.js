import { isUndefined } from './utils'
const Hypen = (require('../hypen-kotlin/kotlin/hypen-kotlin.js').space.hypen.parser.combinators)

const applicatorHandlers = {
    padding: applyPadding,
    color: applyColor,
    backgroundColor: applyBackgroundColor,
    borderRadius: applyBorderRadius,
    fontSize: applyFontSize,
    fontWeight: applyFontWeight,
    textStyle: applyTextStyle,
    borderColor: applyBorderColor,
    borderStyle: applyBorderStyle,
    borderWidth: applyBorderWidth,
    textAlign: applyTextAlign,
    height: applyHeight,
    margin: applyMargin,
    width: applyWidth,
    horizontalAlign: applyFlexProperties,
    verticalAlign: applyFlexProperties,
};
function applyPadding(component, HTMLNode) {
    const padding = component.applicators.find((it) => it.name.text === 'padding');
    if (typeof padding !== 'undefined') {
        const paddingSize = padding.arguments.arguments.length;
        console.log(padding.arguments.arguments[0])
        if (paddingSize === 1 && padding.arguments.arguments[0].name === null) {
            const arg = valueFromArgument(padding.arguments.argFor('padding', 0));
            console.log("Got padinng size >", arg, "<")
            HTMLNode.style.padding = arg + 'px';
        } else {
            padding.arguments.arguments.forEach((it) => {
                switch (it.name.text) {
                    case 'left':
                        HTMLNode.style.paddingLeft = valueFromArgument(it.value) + 'px';
                        console.log("Got padding name >", it.name.text, "<", valueFromArgument(it.value))
                        break;
                    case 'right':
                        HTMLNode.style.paddingRight = valueFromArgument(it.value) + 'px';
                        break;
                    case 'top':
                        HTMLNode.style.paddingTop = valueFromArgument(it.value) + 'px';
                        break;
                    case 'bottom':
                        HTMLNode.style.paddingBottom = valueFromArgument(it.value) + 'px';
                        break;
                    default:
                        console.log("Got padding name >", it.name.text, "<")
                        break;
                }
            });
        }
    }
}

function applyFlexProperties(component, HTMLNode, parentComponent) {
    if (parentComponent !== null && parentComponent!==undefined && (parentComponent.name.text === 'row' || parentComponent.name.text === 'column')) {
        HTMLNode.style.flexGrow = 0;
        HTMLNode.style.flexShrink = 1;
        HTMLNode.style.flexBasis = 'auto';
        if (parentComponent.name.text === 'row') { HTMLNode.style.minWidth = 0; } else { HTMLNode.style.minHeight = 0; }
        const horizontalAlign = component.applicators.find((it) => it.name.text === 'horizontalAlign');
        if (!isUndefined(horizontalAlign)) {
            switch (horizontalAlign) {
                case 'left':
                case 'start':
                    HTMLNode.setAttribute('align-x', 'left');
                    break;
                case 'right':
                case 'end':
                    HTMLNode.setAttribute('align-x', 'right');
                    break;
                case 'center':
                    HTMLNode.setAttribute('align-x', 'center');
                    break;
            }
        }
        const verticalAlign = component.applicators.find((it) => it.name.text === 'verticalAlign');
        if (!isUndefined(verticalAlign)) {
            switch (verticalAlign) {
                case 'top':
                    HTMLNode.setAttribute('align-y', 'top');
                    HTMLNode.setAttribute('align-y', 'top');
                    break;
                case 'right':
                    HTMLNode.setAttribute('align-y', 'bottom');
                    break;
                case 'center':
                case 'spaceAround':
                case 'spaceBetween':
                    HTMLNode.setAttribute('align-y', 'center');
                    break;
            }
        }
    }
}

function applyWidth(component, HTMLNode, parentComponent) {
    const width = component.applicators.find((it) => it.name.text === 'width');
    if (typeof width !== 'undefined') {
        HTMLNode.style.minWidth = valueFromArgument(width.arguments.argFor('width', 0));
        if (parentComponent !== null && (parentComponent.name.text === 'row' || parentComponent.name.text === 'list')) {
            HTMLNode.style.flexBasis = valueFromArgument(width.arguments.argFor('width', 0)) ;
        } else {
            HTMLNode.style.width = valueFromArgument(width.arguments.argFor('width', 0));
        }
    }
}

function applyMargin(component, HTMLNode) {
    const margin = component.applicators.find((it) => it.name.text === 'margin');
    if (typeof margin !== 'undefined') {
        const marginSize = margin.arguments.length;
        if (marginSize === 1) {
            HTMLNode.style.margin = valueFromArgument(margin.arguments.argFor('margin', 0));
        } else {
            margin.arguments.arguments.forEach((it) => {
                switch (it.key) {
                    case 'left':
                        HTMLNode.style.marginLeft = valueFromArgument(it.value);
                        break;
                    case 'right':
                        HTMLNode.style.marginRight = valueFromArgument(it.value);
                        break;
                    case 'top':
                        HTMLNode.style.marginTop = valueFromArgument(it.value);
                        break;
                    case 'bottom':
                        HTMLNode.style.marginBottom = valueFromArgument(it.value);
                        break;
                    default:
                        break;
                }
            });
        }
    }
}

export function valueFromArgument(argument) {
    if(argument==null)
        return null;
    switch (argument.constructor) {
        case Hypen.Property:
            return valueFromArgument(argument.value)
        case Hypen.Object:
            return valueFromArgument(argument.childrenArray[0])
        case Hypen.QuotedString:
            return argument.text
        case Hypen.Number:
            return argument.number
        default:
            return argument
    }
}
function applyColor(component, HTMLNode) {
    const color = component.applicators.find((it) => it.name.text === 'color');
    if (typeof color !== 'undefined') {
        let arg = valueFromArgument(color.arguments.argFor('color', 0));
        HTMLNode.style.color = arg
    }
}

function applyBackgroundColor(component, HTMLNode) {
    const backgroundColor = component.applicators.find((it) => it.name.text === 'backgroundColor');
    if (typeof backgroundColor !== 'undefined') {
        let color = valueFromArgument(backgroundColor.arguments.argFor('backgroundColor', 0));
        HTMLNode.style.backgroundColor = color
    }
}

function applyBorderRadius(component, HTMLNode) {
    const borderRadius = component.applicators.find((it) => it.name.text === 'borderRadius');
    if (typeof borderRadius !== 'undefined') {
        HTMLNode.style.borderRadius = valueFromArgument(borderRadius.arguments.argFor('borderRadius', 0));
        HTMLNode.style.overflow = 'hidden';
    }
}

function applyFontSize(component, HTMLNode) {
    const fontSize = component.applicators.find((it) => it.name.text === 'fontSize');
    if (typeof fontSize !== 'undefined') {
        HTMLNode.style.fontSize = valueFromArgument(fontSize.arguments.argFor('fontSize', 0) + 'pt');
    }
}

function applyFontWeight(component, HTMLNode) {
    const fontWeight = component.applicators.find((it) => it.name.text === 'fontWeight');
    if (typeof fontWeight !== 'undefined') {
        HTMLNode.style.fontWeight = valueFromArgument(fontWeight.arguments.argFor('fontWeight', 0));
    }
}

function applyTextStyle(component, HTMLNode) {
    const textStyle = component.applicators.find((it) => it.name.text === 'textStyle');
    if (typeof textStyle !== 'undefined') {
        let hasAnotherDecoration = false;

        const value = valueFromArgument(textStyle.arguments.argFor('style', 0));
        if (value !== undefined && value !== null && value.length !== 0) {
            let list;
            if (value.includes(' ')) { list = value.split(' '); } else { list = [value]; }
            list.forEach((it) => {
                switch (it) {
                    case 'italic' :
                        HTMLNode.style.fontStyle = 'italic';
                        break;
                    case 'underline':
                        if (hasAnotherDecoration) {
                            HTMLNode.style.textDecoration += ' underline';
                        } else { HTMLNode.style.textDecoration = 'underline'; }
                        hasAnotherDecoration = true;
                        break;
                    case 'strikethrough':
                        if (hasAnotherDecoration) {
                            HTMLNode.style.textDecoration += ' line-through';
                        } else { HTMLNode.style.textDecoration = 'line-through'; }

                        hasAnotherDecoration = true;
                        break;
                }
            });
        }
    }
}

function applyBorderColor(component, HTMLNode) {
    const borderColor = component.applicators.find((it) => it.name.text === 'borderColor');
    if (typeof borderColor !== 'undefined') {
        if (HTMLNode.style.borderStyle === 'undefined' || HTMLNode.style.borderStyle === '') {
            HTMLNode.style.borderColor = valueFromArgument(borderColor.arguments.argFor('color', 0));
        }
    }
}

function applyBorderStyle(component, HTMLNode) {
    const borderStyle = component.applicators.find((it) => it.name.text === 'borderStyle');
    if (typeof borderColor !== 'undefined') {
        HTMLNode.style.borderStyle = valueFromArgument(borderStyle.arguments.argFor('style', 0));
    }
}

function applyBorderWidth(component, HTMLNode) {
    const borderWidth = component.applicators.find((it) => it.name.text === 'borderWidth');
    if (typeof borderColor !== 'undefined') {
        HTMLNode.style.borderWidth = valueFromArgument(borderWidth.arguments.argFor('width', 0));
    }
}

function applyTextAlign(component, HTMLNode) {
    const alignText = component.applicators.find((it) => it.name.text === 'textAlign');
    if (typeof alignText !== 'undefined') {
        HTMLNode.style.textAlign = valueFromArgument(alignText.arguments.argFor('textAlign', 0));
    }
}

function applyHeight(component, HTMLNode, parentComponent) {
    const height = component.applicators.find((it) => it.name.text === 'height');
    if (typeof height !== 'undefined') {
        if (parentComponent !== null && (parentComponent.name.text === 'column' || parentComponent.name.text === 'list')) {
            HTMLNode.style.minHeight = valueFromArgument(height.arguments.argFor('height', 0));
            HTMLNode.style.flexBasis = valueFromArgument(height.arguments.argFor('height', 0));
        } else {
         HTMLNode.style.height = valueFromArgument(height.arguments.argFor('height', 0));
        }
    }
}


function applyApplicators(component, HTMLNode, parentComponent) {
    component.applicators.forEach((applicator) => {
        const handler = applicatorHandlers[applicator.name.text];
        if (handler) {
            handler(component, HTMLNode, parentComponent);
        }
    });
}

export function mapApplicatorsToStyle(component, parentComponent, HTMLNode) {
    applyApplicators(component, HTMLNode, parentComponent);
    return HTMLNode;
}



