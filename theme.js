// example theme.js
import { dark } from "mdx-deck/themes";
import codeTheme from "react-syntax-highlighter/styles/prism/twilight";
import prismJs from "react-syntax-highlighter/languages/prism/javascript";
import prismPython from "react-syntax-highlighter/languages/prism/python";

export default {
  // extends the default theme
  ...dark,
  // add a custom font
  font: "Fira Code, monospace",
  // custom colors
  colors: {
    text: "#dedede",
    background: "#131313",
    link: "#0ff"
  },
  blockquote: {
    padding: "0 2em",
    border: "0.3em solid rgb(84, 84, 84)",
    borderRadius: ".5em",
    fontSize: "1.1em",
    fontWeight: "normal"
  },
  prism: {
    style: codeTheme,
    languages: {
      javascript: prismJs,
      python: prismPython
    }
  }
};
