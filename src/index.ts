const stars = document.querySelectorAll<HTMLElement>('.star');
const tex = document.querySelector<HTMLElement>('#text');

let selectedIndex = -1; 

stars.forEach((star, index) => {


  star.addEventListener('mouseenter', () => {
    stars.forEach((s, i) => {
      s.style.color = i <= index ? 'gold' : 'gray';
    });
  });


  star.addEventListener('mouseleave', () => {
    stars.forEach((s, i) => {
      s.style.color = i <= selectedIndex ? 'gold' : 'gray';
    });
  });

 if(tex){
star.addEventListener('click', () => {
    selectedIndex = index;
    tex.innerHTML = `You rated ${index + 1} star${index === 0 ? '' : 's'}`;
  });
 }
  

});

