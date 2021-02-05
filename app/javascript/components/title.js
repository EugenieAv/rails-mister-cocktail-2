import Typed from 'typed.js';


const loadDynamicTitleText = () => {
  new Typed('#title-typed-text', {
    strings: ["Title"],
    typeSpeed: 500,
    showCursor: false
  });
}

export { loadDynamicTitleText };
