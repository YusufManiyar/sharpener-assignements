
      const myform = document.querySelector('#my-form')
    //   myform.addEventListener('click', e => {
    //     e.preventDefault();
    //     console.log(e.target)
    //   });

      myform.addEventListener('mouseover', e => {
        e.preventDefault();
        console.log(e.target.name.value)
      });


      myform.addEventListener('mouseover', e => {
        e.preventDefault();
        console.log('mouseout event occured')

        console.log(e.target)
      });
      

    //   btn.addEventListener('mouseover', e => {
    //     e.preventDefault();
    //     console.log(e.target.className);
    //     document.getElementById('my-form').style.background = '#ccc';
    //     document.querySelector('body').classList.add('bg-dark');
    //     ul.lastElementChild.innerHTML = '<h1>Changed</h1>';
    //   });