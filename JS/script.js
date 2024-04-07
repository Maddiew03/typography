const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const line_1 = entry.target.querySelector('.line1');

    if (entry.isIntersecting) {
      line_1.classList.add('lineAnimation1');
	  return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    line_1.classList.remove('lineAnimation1');
  });
});

observer.observe(document.querySelector('.lineWrapper1'));

const observer2 = new IntersectionObserver(entries2 => {
  entries2.forEach(entry2 => {
    const line_2 = entry2.target.querySelector('.line2');

    if (entry2.isIntersecting) {
      line_2.classList.add('lineAnimation2');
	  return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    line_2.classList.remove('lineAnimation2');
  });
});

observer2.observe(document.querySelector('.lineWrapper2'));

const observer3 = new IntersectionObserver(entries3 => {
  entries3.forEach(entry3 => {
    const line_3 = entry3.target.querySelector('.line3');

    if (entry3.isIntersecting) {
      line_3.classList.add('lineAnimation3');
	  return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    line_3.classList.remove('lineAnimation3');
  });
});

observer3.observe(document.querySelector('.lineWrapper3'));


const observer4 = new IntersectionObserver(entries4 => {
  entries4.forEach(entry4 => {
    const line_4 = entry4.target.querySelector('.line4');

    if (entry4.isIntersecting) {
      line_4.classList.add('lineAnimation4');
	  return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    line_4.classList.remove('lineAnimation4');
  });
});

observer4.observe(document.querySelector('.lineWrapper4'));

const observer5 = new IntersectionObserver(entries5 => {
  entries5.forEach(entry5 => {
    const line_5 = entry5.target.querySelector('.line5');

    if (entry5.isIntersecting) {
      line_5.classList.add('lineAnimation5');
	  return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    line_5.classList.remove('lineAnimation5');
  });
});

observer5.observe(document.querySelector('.lineWrapper5'));

const observer6 = new IntersectionObserver(entries6 => {
  entries6.forEach(entry6 => {
    const line_6 = entry6.target.querySelector('.line6');

    if (entry6.isIntersecting) {
      line_6.classList.add('lineAnimation6');
	  return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    line_6.classList.remove('lineAnimation6');
  });
});

observer6.observe(document.querySelector('.lineWrapper6'));


const observer7 = new IntersectionObserver(entries7 => {
  entries7.forEach(entry7 => {
    const line_7 = entry7.target.querySelector('.line7');

    if (entry7.isIntersecting) {
      line_7.classList.add('lineAnimation7');
	  return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    line_7.classList.remove('lineAnimation7');
  });
});

observer7.observe(document.querySelector('.lineWrapper7'));

const observer8 = new IntersectionObserver(entries8 => {
  entries8.forEach(entry8 => {
    const line_8 = entry8.target.querySelector('.line8');

    if (entry8.isIntersecting) {
      line_8.classList.add('lineAnimation8');
	  return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    line_8.classList.remove('lineAnimation8');
  });
});

observer8.observe(document.querySelector('.lineWrapper8'));


const observer9 = new IntersectionObserver(entries9 => {
  entries9.forEach(entry9 => {
    const line_9 = entry9.target.querySelector('.line9');

    if (entry9.isIntersecting) {
      line_9.classList.add('lineAnimation9');
	  return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    line_9.classList.remove('lineAnimation9');
  });
});

observer9.observe(document.querySelector('.lineWrapper9'));