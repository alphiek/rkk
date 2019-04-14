import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

html {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  font-size: calc(0.6em + 1vw);
  font-family: Raleway, 'Century Gothic', Arial, sans-serif;
  font-weight: 600;
  line-height: 130%;
  box-sizing: border-box;
  overflow-y: scroll;
  background-color: #ffffff;
  @media (max-width: 991px) {
  font-size: calc(0.6em + 1.2vw);
};
  @media (max-width: 767px) {
  font-size: calc(0.6em + 1.8vw);
};
  @media (max-width: 479px) {
  font-size: calc(0.6em + 2.2vw);
};
}

* {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
}
*:before {
  box-sizing: inherit;
}
*:after {
  box-sizing: inherit;
}

body {
  word-wrap: break-word;
  font-kerning: normal;
  -moz-font-feature-settings: "kern", "liga", "clig", "calt";
  -ms-font-feature-settings: "kern", "liga", "clig", "calt";
  -webkit-font-feature-settings: "kern", "liga", "clig", "calt";
  font-feature-settings: "kern", "liga", "clig", "calt";
  background-color: #ffffff;
}

div {
  font-size: 1rem;
}

a {
text-decoration: none;
}

a:active,
a:hover {
  outline-width: 0;
}

img {
  max-width: 100%;
  display: block;
  margin: 0 auto;
  padding: 0;
  border-style: none;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
main,
menu,
nav,
section,
summary {
  display: block;
}

svg:not(:root) {
  overflow: hidden;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  text-rendering: optimizeLegibility;
}

ul {
  list-style-type: none;
  list-style-position: outside;
  list-style-image: none;
}

ol {
  list-style-position: outside;
  list-style-image: none;
}

input[type=checkbox]
{
/* Double-sized Checkboxes */
-ms-transform: scale(2); /* IE */
-moz-transform: scale(2); /* FF */
-webkit-transform: scale(2); /* Safari and Chrome */
-o-transform: scale(2); /* Opera */
padding: 10px;
}

button,
input,
optgroup,
select,
textarea {
  font: inherit;
  margin: 0;
  line-height: 2em;
}
optgroup {
  font-weight: 700;
}
button,
input {
  overflow: visible;
}
button,
select {
  text-transform: none;
}
[type="reset"],
[type="submit"],
button,
html [type="button"] {
  -webkit-appearance: button;
}
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner,
button::-moz-focus-inner {
  border-style: none;
  padding: 0;
}
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring,
button:-moz-focusring {
  outline: 1px dotted ButtonText;
}

textarea {
  overflow: auto;
}
[type="checkbox"],
[type="radio"] {
  box-sizing: border-box;
}
[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}
[type="search"] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}
[type="search"]::-webkit-search-cancel-button,
[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}
::-webkit-input-placeholder {
  color: inherit;
}
::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}
`
