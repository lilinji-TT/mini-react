"use strict";
// our render function
function creatElement(type, props, ...children) {
  return {
    type,
    props: Object.assign(Object.assign({}, props), {
      children: children.map((child) => {
        const isTextNode =
          typeof child === "string" || typeof child === "number";
        return isTextNode ? createTextNode(child) : child;
      }),
    }),
  };
}
function createTextNode(node) {
  return {
    type: "TEXT_ELEMENT",
    props: {
      node,
      children: [],
    },
  };
}

const MiniReact = {
  creatElement,
};
window.MiniReact = MiniReact;
