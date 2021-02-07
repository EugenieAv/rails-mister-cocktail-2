import Typed from 'typed.js';


const loadDynamicTitleText = () => {
  const rightPage = document.querySelector('.title-typed-text');
  if (rightPage) {
    new Typed('#title-typed-text', {
      strings: ["Title"],
      typeSpeed: 500,
      showCursor: false
    });
  }
}

export { loadDynamicTitleText };
