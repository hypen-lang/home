Applicator to CSS Mapping Documentation

This documentation outlines the various applicators defined in applicatorToCssMapping.js and their visual effects on HTML elements, along with the arguments they accept.
Applicators

#### padding
- Visual Effect: 
  - Adjusts the padding of an element, which is the space between the element's content and its border.
- Arguments:
  - Single value: Applies the same padding to all sides.
   - Named values (left, right, top, bottom): Applies padding to specific sides.
#### color
- Visual Effect: Sets the text color of an element.
- Arguments:
  - Single value: Color value (e.g., hex, rgb, color name).
#### backgroundColor
- Visual Effect: Sets the background color of an element.
- Arguments:
  - Single value: Color value.
#### borderRadius
- Visual Effect: Rounds the corners of an element's border.
- Arguments:
  - Single value: Radius of the corners.
#### fontSize
- Visual Effect: Sets the size of the text within an element.
- Arguments:
  - Single value: Size of the font (in points).
#### fontWeight
- Visual Effect: Sets the weight (thickness) of the font.
- Arguments:
  - Single value: Weight of the font (e.g., normal, bold, numeric value).
#### textStyle
- Visual Effect: Applies text styling such as italic, underline, and strikethrough.
- Arguments:
  - Single or multiple values: italic, underline, strikethrough.
#### borderColor
- Visual Effect: Sets the color of the border.
- Arguments:
  - Single value: Color value.
#### borderStyle
- Visual Effect: Sets the style of the border (e.g., solid, dashed).
- Arguments:
  - Single value: Style of the border.
#### borderWidth
- Visual Effect: Sets the width of the border.
- Arguments:
  - Single value: Width of the border.
#### textAlign
- Visual Effect: Aligns the text within an element.
- Arguments:
  - Single value: Alignment of the text (e.g., left, right, center).
#### height
- Visual Effect: Sets the height of an element.
- Arguments:
  - Single value: Height of the element.
#### margin
- Visual Effect: Adjusts the margin of an element, which is the space outside the border.
- Arguments:
  - Single value: Applies the same margin to all sides.
 
   - Named values (left, right, top, bottom): Applies margin to specific sides.
#### width
- Visual Effect: Sets the width of an element.
- Arguments:
  - Single value: Width of the element.
#### horizontalAlign and verticalAlign
- Visual Effect: Aligns an element horizontally or vertically within its parent container. These are applied through flex properties.
- Arguments:
  - horizontalAlign: left, right, center.
- verticalAlign: top, bottom, center, spaceAround, spaceBetween.
Usage

Each applicator is used to style HTML elements dynamically by mapping component properties to CSS styles. The mapApplicatorsToStyle function applies all applicable styles to an HTMLNode based on the component's applicators and the parent component's context.
