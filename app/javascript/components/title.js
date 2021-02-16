import Typed from 'typed.js';


const loadDynamicTitleText = () => {
  const spanThe = document.querySelector('#the-typed-text');
  const rightPage = document.querySelector('#title-typed-text');
  const spanRecipe = document.querySelector('#recipe-typed-text');
  console.log(rightPage.dataset.message)
  if (rightPage) {
    new Typed('#the-typed-text', {
      strings: [ "", "The" ],
      typeSpeed: 50,
      showCursor: false,
      loop: false,
      startDelay: 0
    // strings: ["Change your life", "Learn to code"],
    // typeSpeed: 50,
    // loop: true
    });
    new Typed('#title-typed-text', {
      strings: [ "", rightPage.dataset.message ],
      typeSpeed: 50,
      showCursor: false,
      loop: false,
      startDelay: 1000
    });
    new Typed('#recipe-typed-text', {
      strings: [ "", "Recipe" ],
      typeSpeed: 50,
      showCursor: false,
      loop: false,
      startDelay: 2000
    });
  }
}

export { loadDynamicTitleText };


  // new Typed('#banner-typed-text', {
  //   strings: ["Change your life", "Learn to code"],
  //   typeSpeed: 50,
  //   loop: true
  // });
