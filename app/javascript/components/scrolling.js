import  AOS  from 'aos';

const scrolling = () => {
  const indexPage = document.querySelector('.index-cocktail');
  if (indexPage) {
    console.log('on scrolle fort ici ');
     AOS.init({
      easing: 'ease',
      duration: 1200,
      anchorPlacement: 'top-bottom'
     });
  }
}

export { scrolling };
