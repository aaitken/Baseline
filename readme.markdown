#Baseline

Baseline is a simple development tool that helps establish vertical rhythm in web app/site pages. Baseline
inserts a canvas element in to the page, then draws line rules according to a base line-height set by the developer.
With these guides in place, font-size, line-height, margin, and padding settings can be visually spot-checked to help
ensure a consistent vertical rhythm.

##Usage

1. Place the baseline.js script reference immediately before the document's closing body tag.
2. Apply a new class to the body element in the form of "baseline-[lineheight]" - so for example,
<body class="baseline-24"> to draw line rules for a 24 pixel baseline.

With the script in place and the class attached to the body tag, the line rules will be drawn the next time the document
is loaded. As the canvas element is given a z-index of 7000 so that it sits on top of any page content, a toggle button
is also written to the page. Use this to hide the canvas if you need to access elements beneath it.