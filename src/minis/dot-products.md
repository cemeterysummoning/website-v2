---
title: 'What are dot products, anyway?'
date: 'Oct 13 2022'

---

The dot product (or inner product, or scalar product) is ubiquitous throughout different areas of math, most importantly but not limited to linear algebra. It's an operation that takes in two vectors and returns a single number. Functionally, the dot product is calculated in two different ways: 

$$\bold{a} \cdot \bold{b} = \sum_{i=0}^n a_i \cdot b_i$$

$$\bold{a} \cdot \bold{b} = |\bold{a}||\bold{b}|\cos{\theta}$$

Personally, I've always wondered - what does the dot product actually *mean*? Is there a visual representation for what the purpose of a dot product is?

To answer this question, we can start with our second formula, 

$$\bold{a} \cdot \bold{b} = |\bold{a}||\bold{b}|\cos{\theta}$$

<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="226pt" height="140pt" viewBox="0 0 113.784 71.457" version="1.1" fill="white">
<defs>
<g>
<symbol overflow="visible" id="glyph0-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="glyph0-1">
<path style="stroke:none;" d="M 2.140625 -4 L 2.140625 -6.921875 L 0.375 -6.84375 L 0.375 -6.375 C 0.984375 -6.375 1.0625 -6.375 1.0625 -5.984375 L 1.0625 0 L 1.53125 0 L 2.015625 -0.5625 C 2.09375 -0.484375 2.578125 0.0625 3.46875 0.0625 C 4.953125 0.0625 5.984375 -0.84375 5.984375 -2.21875 C 5.984375 -3.546875 5.046875 -4.484375 3.59375 -4.484375 C 2.875 -4.484375 2.375 -4.203125 2.140625 -4 Z M 2.1875 -0.984375 L 2.1875 -3.484375 C 2.46875 -3.84375 2.9375 -4.125 3.484375 -4.125 C 4.703125 -4.125 4.703125 -2.921875 4.703125 -2.21875 C 4.703125 -1.75 4.703125 -1.203125 4.453125 -0.8125 C 4.15625 -0.40625 3.703125 -0.296875 3.375 -0.296875 C 2.6875 -0.296875 2.296875 -0.84375 2.1875 -0.984375 Z M 2.1875 -0.984375 "/>
</symbol>
<symbol overflow="visible" id="glyph0-2">
<path style="stroke:none;" d="M 3.734375 -0.765625 C 3.734375 -0.453125 3.734375 0 4.765625 0 L 5.25 0 C 5.4375 0 5.5625 0 5.5625 -0.234375 C 5.5625 -0.46875 5.4375 -0.46875 5.296875 -0.46875 C 4.6875 -0.484375 4.6875 -0.609375 4.6875 -0.84375 L 4.6875 -2.984375 C 4.6875 -3.875 3.984375 -4.515625 2.5 -4.515625 C 1.9375 -4.515625 0.71875 -4.46875 0.71875 -3.59375 C 0.71875 -3.15625 1.0625 -2.96875 1.328125 -2.96875 C 1.640625 -2.96875 1.96875 -3.1875 1.96875 -3.59375 C 1.96875 -3.890625 1.78125 -4.0625 1.75 -4.09375 C 2.03125 -4.140625 2.34375 -4.15625 2.46875 -4.15625 C 3.203125 -4.15625 3.5625 -3.734375 3.5625 -2.984375 L 3.5625 -2.640625 C 2.84375 -2.609375 0.3125 -2.515625 0.3125 -1.078125 C 0.3125 -0.125 1.5625 0.0625 2.25 0.0625 C 3.046875 0.0625 3.515625 -0.34375 3.734375 -0.765625 Z M 3.5625 -2.328125 L 3.5625 -1.390625 C 3.5625 -0.421875 2.640625 -0.296875 2.390625 -0.296875 C 1.890625 -0.296875 1.484375 -0.640625 1.484375 -1.09375 C 1.484375 -2.15625 3.0625 -2.296875 3.5625 -2.328125 Z M 3.5625 -2.328125 "/>
</symbol>
<symbol overflow="visible" id="glyph1-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="glyph1-1">
<path style="stroke:none;" d="M 4.53125 -4.984375 C 4.53125 -5.640625 4.359375 -7.03125 3.34375 -7.03125 C 1.953125 -7.03125 0.421875 -4.21875 0.421875 -1.9375 C 0.421875 -1 0.703125 0.109375 1.609375 0.109375 C 3.015625 0.109375 4.53125 -2.75 4.53125 -4.984375 Z M 1.46875 -3.625 C 1.640625 -4.25 1.84375 -5.046875 2.25 -5.765625 C 2.515625 -6.25 2.875 -6.8125 3.328125 -6.8125 C 3.8125 -6.8125 3.875 -6.171875 3.875 -5.609375 C 3.875 -5.109375 3.796875 -4.609375 3.5625 -3.625 Z M 3.46875 -3.296875 C 3.359375 -2.84375 3.15625 -2 2.765625 -1.28125 C 2.421875 -0.59375 2.046875 -0.109375 1.609375 -0.109375 C 1.28125 -0.109375 1.078125 -0.40625 1.078125 -1.328125 C 1.078125 -1.75 1.140625 -2.328125 1.390625 -3.296875 Z M 3.46875 -3.296875 "/>
</symbol>
</g>
<clipPath id="clip1">
  <path d="M 0 57 L 113.785156 57 L 113.785156 58 L 0 58 Z M 0 57 "/>
</clipPath>
<clipPath id="clip2">
  <path d="M 111 55 L 113.785156 55 L 113.785156 61 L 111 61 Z M 111 55 "/>
</clipPath>
</defs>
<g id="surface1">
<g clip-path="url(#clip1)" clip-rule="nonzero">
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:#FFFFFF;stroke-opacity:1;stroke-miterlimit:10;" d="M 0.00021875 -0.00121875 L 112.9885 -0.00121875 " transform="matrix(1,0,0,-1,0.199,57.698)"/>
</g>
<g clip-path="url(#clip2)" clip-rule="nonzero">
<path style="fill:none;stroke-width:0.3985;stroke-linecap:round;stroke-linejoin:round;stroke:#FFFFFF;stroke-opacity:1;stroke-miterlimit:10;" d="M -2.070564 2.389406 C -1.695564 0.955813 -0.851814 0.280031 -0.00025125 -0.00121875 C -0.851814 -0.278562 -1.695564 -0.95825 -2.070564 -2.391844 " transform="matrix(1,0,0,-1,113.38697,57.698)"/>
</g>
<g style="fill:#FFFFFF;fill-opacity:1;">
  <use xlink:href="#glyph0-1" x="53.71" y="68.136"/>
</g>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:#FFFFFF;stroke-opacity:1;stroke-miterlimit:10;" d="M 0.00021875 -0.00121875 L 84.70725 56.471438 " transform="matrix(1,0,0,-1,0.199,57.698)"/>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:round;stroke-linejoin:round;stroke:#FFFFFF;stroke-opacity:1;stroke-miterlimit:10;" d="M -2.071278 2.392176 C -1.694227 0.957699 -0.851302 0.278386 0.0013712 0.00103145 C -0.852381 -0.279588 -1.694211 -0.957831 -2.072321 -2.391231 " transform="matrix(0.83202,-0.55467,-0.55467,-0.83202,85.07365,1.1149)"/>
<g style="fill:#FFFFFF;fill-opacity:1;">
  <use xlink:href="#glyph0-2" x="33.63" y="28.731"/>
</g>
<g style="fill:#FFFFFF;fill-opacity:1;">
  <use xlink:href="#glyph1-1" x="15.057" y="55.488"/>
</g>
</g>
</svg>

Looking at the diagram, the geometric meaning of the dot product by our second formula seems to become apparent. We can imagine dropping a perpendicular from the end of **a** to **b**:

<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="226pt" height="140pt" viewBox="0 0 113.784 71.457" version="1.1">
<defs>
<g>
<symbol overflow="visible" id="glyph0-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="glyph0-1">
<path style="stroke:none;" d="M 2.140625 -4 L 2.140625 -6.921875 L 0.375 -6.84375 L 0.375 -6.375 C 0.984375 -6.375 1.0625 -6.375 1.0625 -5.984375 L 1.0625 0 L 1.53125 0 L 2.015625 -0.5625 C 2.09375 -0.484375 2.578125 0.0625 3.46875 0.0625 C 4.953125 0.0625 5.984375 -0.84375 5.984375 -2.21875 C 5.984375 -3.546875 5.046875 -4.484375 3.59375 -4.484375 C 2.875 -4.484375 2.375 -4.203125 2.140625 -4 Z M 2.1875 -0.984375 L 2.1875 -3.484375 C 2.46875 -3.84375 2.9375 -4.125 3.484375 -4.125 C 4.703125 -4.125 4.703125 -2.921875 4.703125 -2.21875 C 4.703125 -1.75 4.703125 -1.203125 4.453125 -0.8125 C 4.15625 -0.40625 3.703125 -0.296875 3.375 -0.296875 C 2.6875 -0.296875 2.296875 -0.84375 2.1875 -0.984375 Z M 2.1875 -0.984375 "/>
</symbol>
<symbol overflow="visible" id="glyph0-2">
<path style="stroke:none;" d="M 3.734375 -0.765625 C 3.734375 -0.453125 3.734375 0 4.765625 0 L 5.25 0 C 5.4375 0 5.5625 0 5.5625 -0.234375 C 5.5625 -0.46875 5.4375 -0.46875 5.296875 -0.46875 C 4.6875 -0.484375 4.6875 -0.609375 4.6875 -0.84375 L 4.6875 -2.984375 C 4.6875 -3.875 3.984375 -4.515625 2.5 -4.515625 C 1.9375 -4.515625 0.71875 -4.46875 0.71875 -3.59375 C 0.71875 -3.15625 1.0625 -2.96875 1.328125 -2.96875 C 1.640625 -2.96875 1.96875 -3.1875 1.96875 -3.59375 C 1.96875 -3.890625 1.78125 -4.0625 1.75 -4.09375 C 2.03125 -4.140625 2.34375 -4.15625 2.46875 -4.15625 C 3.203125 -4.15625 3.5625 -3.734375 3.5625 -2.984375 L 3.5625 -2.640625 C 2.84375 -2.609375 0.3125 -2.515625 0.3125 -1.078125 C 0.3125 -0.125 1.5625 0.0625 2.25 0.0625 C 3.046875 0.0625 3.515625 -0.34375 3.734375 -0.765625 Z M 3.5625 -2.328125 L 3.5625 -1.390625 C 3.5625 -0.421875 2.640625 -0.296875 2.390625 -0.296875 C 1.890625 -0.296875 1.484375 -0.640625 1.484375 -1.09375 C 1.484375 -2.15625 3.0625 -2.296875 3.5625 -2.328125 Z M 3.5625 -2.328125 "/>
</symbol>
<symbol overflow="visible" id="glyph1-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="glyph1-1">
<path style="stroke:none;" d="M 4.53125 -4.984375 C 4.53125 -5.640625 4.359375 -7.03125 3.34375 -7.03125 C 1.953125 -7.03125 0.421875 -4.21875 0.421875 -1.9375 C 0.421875 -1 0.703125 0.109375 1.609375 0.109375 C 3.015625 0.109375 4.53125 -2.75 4.53125 -4.984375 Z M 1.46875 -3.625 C 1.640625 -4.25 1.84375 -5.046875 2.25 -5.765625 C 2.515625 -6.25 2.875 -6.8125 3.328125 -6.8125 C 3.8125 -6.8125 3.875 -6.171875 3.875 -5.609375 C 3.875 -5.109375 3.796875 -4.609375 3.5625 -3.625 Z M 3.46875 -3.296875 C 3.359375 -2.84375 3.15625 -2 2.765625 -1.28125 C 2.421875 -0.59375 2.046875 -0.109375 1.609375 -0.109375 C 1.28125 -0.109375 1.078125 -0.40625 1.078125 -1.328125 C 1.078125 -1.75 1.140625 -2.328125 1.390625 -3.296875 Z M 3.46875 -3.296875 "/>
</symbol>
</g>
<clipPath id="clip1">
  <path d="M 0 57 L 113.785156 57 L 113.785156 58 L 0 58 Z M 0 57 "/>
</clipPath>
<clipPath id="clip2">
  <path d="M 111 55 L 113.785156 55 L 113.785156 61 L 111 61 Z M 111 55 "/>
</clipPath>
</defs>
<g id="surface1">
<g clip-path="url(#clip1)" clip-rule="nonzero">
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:#FFFFFF;stroke-opacity:1;stroke-miterlimit:10;" d="M 0.00021875 -0.00121875 L 112.9885 -0.00121875 " transform="matrix(1,0,0,-1,0.199,57.698)"/>
</g>
<g clip-path="url(#clip2)" clip-rule="nonzero">
<path style="fill:none;stroke-width:0.3985;stroke-linecap:round;stroke-linejoin:round;stroke:#FFFFFF;stroke-opacity:1;stroke-miterlimit:10;" d="M -2.070564 2.389406 C -1.695564 0.955813 -0.851814 0.280031 -0.00025125 -0.00121875 C -0.851814 -0.278562 -1.695564 -0.95825 -2.070564 -2.391844 " transform="matrix(1,0,0,-1,113.38697,57.698)"/>
</g>
<g style="fill:#FFFFFF;fill-opacity:1;">
  <use xlink:href="#glyph0-1" x="53.71" y="68.136"/>
</g>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:#FFFFFF;stroke-opacity:1;stroke-miterlimit:10;" d="M 0.00021875 -0.00121875 L 84.70725 56.471438 " transform="matrix(1,0,0,-1,0.199,57.698)"/>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:round;stroke-linejoin:round;stroke:#FFFFFF;stroke-opacity:1;stroke-miterlimit:10;" d="M -2.071278 2.392176 C -1.694227 0.957699 -0.851302 0.278386 0.0013712 0.00103145 C -0.852381 -0.279588 -1.694211 -0.957831 -2.072321 -2.391231 " transform="matrix(0.83202,-0.55467,-0.55467,-0.83202,85.07365,1.1149)"/>
<g style="fill:#FFFFFF;fill-opacity:1;">
  <use xlink:href="#glyph0-2" x="33.63" y="28.731"/>
</g>
<g style="fill:#FFFFFF;fill-opacity:1;">
  <use xlink:href="#glyph1-1" x="15.057" y="55.488"/>
</g>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:#FFFFFF;stroke-opacity:1;stroke-miterlimit:10;" d="M 85.039281 56.694094 L 85.039281 -0.00121875 " transform="matrix(1,0,0,-1,0.199,57.698)"/>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:#FFFFFF;stroke-opacity:1;stroke-miterlimit:10;" d="M 85.039281 -0.00121875 L 85.039281 8.502688 L 76.535375 8.502688 L 76.535375 -0.00121875 " transform="matrix(1,0,0,-1,0.199,57.698)"/>
</g>
</svg>

We get a right triangle defined by the perpendicular, **a**, and **b**. We also know that the cosine of our angle θ is equal to the ratio of the magnitude of the vector project of **a** onto **b** (let's call it **c**) to the magnitude of **a**. 

$$\cos{\theta} = \frac{|\bold{c} |}{|\bold{a}|}$$

Multiplying |**a**| and |**b**| onto both sides gives us 

$$|\bold{a}||\bold{b}|\cos{\theta} = |\bold{c}||\bold{b}|$$

This is an interesting result; apparently, the dot product gives us the component of **a** along **b** multiplied with the length of **b** itself. 
Note that we can replace **c** with the actual definition of a component (or the magnitude of the projection of one vector onto another). 

$$\text{comp}_{\bold{b}} \bold{a} = \bold{a} \cdot \frac{\bold{b}}{|\bold{b}|} = |\bold{c}|$$

Plugging this into our original expression, 

$$|\bold{a}||\bold{b}|\cos{\theta} = \bold{a} \cdot \frac{\bold{b}}{|\bold{b}|} = \bold{a} \cdot \bold{b}$$

It works out cleanly in the end; 

nothing's blown up, which is always good. 

However, I'm more interested in our first expression: how does the sum of the componentwise products of our vectors relate in any way to the product of the magnitudes of the vectors and the cosine of the angle between them? What is the relationship between these two expressions?

To start, recall the law of cosines: 

$$|\bold{c}|^2 = |\bold{a}|^2 + |\bold{b}|^2 - 2|\bold{a}||\bold{b}|\cos{\theta}$$

<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="226pt" height="140pt" viewBox="0 0 113.784 71.457" version="1.1">
<defs>
<g>
<symbol overflow="visible" id="glyph0-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="glyph0-1">
<path style="stroke:none;" d="M 2.140625 -4 L 2.140625 -6.921875 L 0.375 -6.84375 L 0.375 -6.375 C 0.984375 -6.375 1.0625 -6.375 1.0625 -5.984375 L 1.0625 0 L 1.53125 0 L 2.015625 -0.5625 C 2.09375 -0.484375 2.578125 0.0625 3.46875 0.0625 C 4.953125 0.0625 5.984375 -0.84375 5.984375 -2.21875 C 5.984375 -3.546875 5.046875 -4.484375 3.59375 -4.484375 C 2.875 -4.484375 2.375 -4.203125 2.140625 -4 Z M 2.1875 -0.984375 L 2.1875 -3.484375 C 2.46875 -3.84375 2.9375 -4.125 3.484375 -4.125 C 4.703125 -4.125 4.703125 -2.921875 4.703125 -2.21875 C 4.703125 -1.75 4.703125 -1.203125 4.453125 -0.8125 C 4.15625 -0.40625 3.703125 -0.296875 3.375 -0.296875 C 2.6875 -0.296875 2.296875 -0.84375 2.1875 -0.984375 Z M 2.1875 -0.984375 "/>
</symbol>
<symbol overflow="visible" id="glyph0-2">
<path style="stroke:none;" d="M 3.734375 -0.765625 C 3.734375 -0.453125 3.734375 0 4.765625 0 L 5.25 0 C 5.4375 0 5.5625 0 5.5625 -0.234375 C 5.5625 -0.46875 5.4375 -0.46875 5.296875 -0.46875 C 4.6875 -0.484375 4.6875 -0.609375 4.6875 -0.84375 L 4.6875 -2.984375 C 4.6875 -3.875 3.984375 -4.515625 2.5 -4.515625 C 1.9375 -4.515625 0.71875 -4.46875 0.71875 -3.59375 C 0.71875 -3.15625 1.0625 -2.96875 1.328125 -2.96875 C 1.640625 -2.96875 1.96875 -3.1875 1.96875 -3.59375 C 1.96875 -3.890625 1.78125 -4.0625 1.75 -4.09375 C 2.03125 -4.140625 2.34375 -4.15625 2.46875 -4.15625 C 3.203125 -4.15625 3.5625 -3.734375 3.5625 -2.984375 L 3.5625 -2.640625 C 2.84375 -2.609375 0.3125 -2.515625 0.3125 -1.078125 C 0.3125 -0.125 1.5625 0.0625 2.25 0.0625 C 3.046875 0.0625 3.515625 -0.34375 3.734375 -0.765625 Z M 3.5625 -2.328125 L 3.5625 -1.390625 C 3.5625 -0.421875 2.640625 -0.296875 2.390625 -0.296875 C 1.890625 -0.296875 1.484375 -0.640625 1.484375 -1.09375 C 1.484375 -2.15625 3.0625 -2.296875 3.5625 -2.328125 Z M 3.5625 -2.328125 "/>
</symbol>
<symbol overflow="visible" id="glyph0-3">
<path style="stroke:none;" d="M 3.59375 -4.0625 C 3.40625 -3.890625 3.390625 -3.6875 3.390625 -3.59375 C 3.390625 -3.15625 3.734375 -2.96875 4 -2.96875 C 4.3125 -2.96875 4.640625 -3.1875 4.640625 -3.59375 C 4.640625 -4.453125 3.484375 -4.515625 2.90625 -4.515625 C 1.109375 -4.515625 0.375 -3.375 0.375 -2.21875 C 0.375 -0.890625 1.3125 0.0625 2.84375 0.0625 C 4.46875 0.0625 4.765625 -1.09375 4.765625 -1.171875 C 4.765625 -1.3125 4.625 -1.3125 4.53125 -1.3125 C 4.34375 -1.3125 4.34375 -1.28125 4.28125 -1.15625 C 4.03125 -0.53125 3.546875 -0.34375 3.046875 -0.34375 C 1.65625 -0.34375 1.65625 -1.796875 1.65625 -2.265625 C 1.65625 -2.828125 1.65625 -4.109375 2.9375 -4.109375 C 3.296875 -4.109375 3.453125 -4.09375 3.59375 -4.0625 Z M 3.59375 -4.0625 "/>
</symbol>
<symbol overflow="visible" id="glyph1-0">
<path style="stroke:none;" d=""/>
</symbol>
<symbol overflow="visible" id="glyph1-1">
<path style="stroke:none;" d="M 4.53125 -4.984375 C 4.53125 -5.640625 4.359375 -7.03125 3.34375 -7.03125 C 1.953125 -7.03125 0.421875 -4.21875 0.421875 -1.9375 C 0.421875 -1 0.703125 0.109375 1.609375 0.109375 C 3.015625 0.109375 4.53125 -2.75 4.53125 -4.984375 Z M 1.46875 -3.625 C 1.640625 -4.25 1.84375 -5.046875 2.25 -5.765625 C 2.515625 -6.25 2.875 -6.8125 3.328125 -6.8125 C 3.8125 -6.8125 3.875 -6.171875 3.875 -5.609375 C 3.875 -5.109375 3.796875 -4.609375 3.5625 -3.625 Z M 3.46875 -3.296875 C 3.359375 -2.84375 3.15625 -2 2.765625 -1.28125 C 2.421875 -0.59375 2.046875 -0.109375 1.609375 -0.109375 C 1.28125 -0.109375 1.078125 -0.40625 1.078125 -1.328125 C 1.078125 -1.75 1.140625 -2.328125 1.390625 -3.296875 Z M 3.46875 -3.296875 "/>
</symbol>
</g>
<clipPath id="clip1">
  <path d="M 0 57 L 113.785156 57 L 113.785156 58 L 0 58 Z M 0 57 "/>
</clipPath>
<clipPath id="clip2">
  <path d="M 111 55 L 113.785156 55 L 113.785156 61 L 111 61 Z M 111 55 "/>
</clipPath>
<clipPath id="clip3">
  <path d="M 79 0 L 113.785156 0 L 113.785156 64 L 79 64 Z M 79 0 "/>
</clipPath>
</defs>
<g id="surface1">
<g clip-path="url(#clip1)" clip-rule="nonzero">
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:#FFFFFF;stroke-opacity:1;stroke-miterlimit:10;" d="M 0.00021875 -0.00121875 L 112.9885 -0.00121875 " transform="matrix(1,0,0,-1,0.199,57.698)"/>
</g>
<g clip-path="url(#clip2)" clip-rule="nonzero">
<path style="fill:none;stroke-width:0.3985;stroke-linecap:round;stroke-linejoin:round;stroke:#FFFFFF;stroke-opacity:1;stroke-miterlimit:10;" d="M -2.070564 2.389406 C -1.695564 0.955813 -0.851814 0.280031 -0.00025125 -0.00121875 C -0.851814 -0.278562 -1.695564 -0.95825 -2.070564 -2.391844 " transform="matrix(1,0,0,-1,113.38697,57.698)"/>
</g>
<g style="fill:#FFFFFF;fill-opacity:1;">
  <use xlink:href="#glyph0-1" x="53.71" y="68.136"/>
</g>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:#FFFFFF;stroke-opacity:1;stroke-miterlimit:10;" d="M 0.00021875 -0.00121875 L 84.70725 56.471438 " transform="matrix(1,0,0,-1,0.199,57.698)"/>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:round;stroke-linejoin:round;stroke:#FFFFFF;stroke-opacity:1;stroke-miterlimit:10;" d="M -2.071278 2.392176 C -1.694227 0.957699 -0.851302 0.278386 0.0013712 0.00103145 C -0.852381 -0.279588 -1.694211 -0.957831 -2.072321 -2.391231 " transform="matrix(0.83202,-0.55467,-0.55467,-0.83202,85.07365,1.1149)"/>
<g style="fill:#FFFFFF;fill-opacity:1;">
  <use xlink:href="#glyph0-2" x="33.63" y="28.731"/>
</g>
<g style="fill:#FFFFFF;fill-opacity:1;">
  <use xlink:href="#glyph1-1" x="15.057" y="55.488"/>
</g>
<g clip-path="url(#clip3)" clip-rule="nonzero">
<path style="fill:none;stroke-width:0.3985;stroke-linecap:butt;stroke-linejoin:miter;stroke:#FFFFFF;stroke-opacity:1;stroke-miterlimit:10;" d="M 113.386938 -0.00121875 L 85.218969 56.338625 " transform="matrix(1,0,0,-1,0.199,57.698)"/>
</g>
<path style="fill:none;stroke-width:0.3985;stroke-linecap:round;stroke-linejoin:round;stroke:#FFFFFF;stroke-opacity:1;stroke-miterlimit:10;" d="M -2.072755 2.390767 C -1.693629 0.956428 -0.849789 0.276827 -0.000712251 0.000797774 C -0.848037 -0.278741 -1.693612 -0.95661 -2.070965 -2.392703 " transform="matrix(-0.44717,-0.89436,-0.89436,0.44717,85.32852,1.1826)"/>
<g style="fill:#FFFFFF;fill-opacity:1;">
  <use xlink:href="#glyph0-3" x="104.973" y="25.896"/>
</g>
</g>
</svg>

Notice how we can express **c** in terms of **a** and **b**: namely, 

$$\bold{c} = \bold{a} - \bold{b}$$

Thus, we know the following about the magnitude of **c**:

$$|\bold{c}| = |\bold{a} - \bold{b}| = \sqrt{\sum_{i=0}^n (a_i - b_i)^2}$$

Thus, we can use the law of cosines: 

$$|\bold{a} - \bold{b}|^2 = |\bold{a}^2| + |\bold{b}|^2 - 2|\bold{a}||\bold{b}|\cos{\theta}$$

We know that 

$$\bold{a} \cdot \bold{b} = |\bold{a}||\bold{b}|\cos{\theta}$$

Therefore, the equation becomes 

$$|\bold{a} - \bold{b}|^2 = |\bold{a}|^2 + |\bold{b}|^2 - 2(\bold{a} \cdot \bold{b})$$

$$2(\bold{a} \cdot \bold{b}) = |\bold{a}|^2 + |\bold{b}|^2 - |\bold{a} - \bold{b}|^2$$

$$\bold{a} \cdot \bold{b} = \frac{1}{2} \left(\sum_{i = 0}^n a_i^2 + \sum_{i=0}^n b_i^2 - \sum_{i=0}^n (a_i - b_i)^2\right)$$

We can see a pattern here. When 

$$(a_i - b_i)^2$$

is multiplied out, we see a result of something along the lines of

$$a_i^2 - 2a_ib_i + b_i^2$$

This matches up with each extraneous term in our sum, which ends up canceling out:

$$\bold{a} \cdot \bold{b} = \frac{1}{2} \left(\sum_{i = 0}^n a_i^2 + \sum_{i=0}^n b_i^2 - \sum_{i=0}^n (a_i^2 - 2a_ib_i + b_i^2) \right)$$

$$\bold{a} \cdot \bold{b} = \frac{1}{2} \left(-\sum_{i=0}^n (- 2a_ib_i) \right)$$

$$\bold{a} \cdot \bold{b} = \sum_{i=0}^n a_ib_i$$

And we are done with our proof.