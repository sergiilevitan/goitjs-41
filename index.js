console.log('module 7.2');

// =====  lightbox

// const instance = basicLightbox.create(`
//    <div class='modal'>
// 	<h1>Dynamic Content</h1>
// 	<p>You can set the content of the lightbox with JS.</p>
//   <img src= />
//   <button>Close</button>
//   </div>
// `);


// const refs = {
//   button1: document.querySelector('#button-1'),
//   button2: document.querySelector('#button-2'),
//   image: instance.element().querySelector('img'),
//   closeBtn: instance.element().querySelector('button'),
// };



// function onBtn1Click() {
//   refs.image.src = "https://picsum.photos/id/237/100/70";
//   instance.show();
// };

// function onBtn2Click() {
//   refs.image.src = "https://picsum.photos/id/238/100/70";
//   instance.show();  
// };

// refs.button1.addEventListener('click', onBtn1Click);
// refs.button2.addEventListener('click', onBtn2Click);
// refs.closeBtn.addEventListener('click', instance.close);


// === throttle == //

const refs = {
  progress: document.querySelector('.progress'),
  sections: document.querySelector('.sections'),
}

refs.progress.value = refs.sections.clientHeight;
refs.sections.max = refs.sections.scrollHeight;

const handleScroll = (e) => {
  console.log('scroll')
  refs.progress.value = e.target.scrollTop + refs.sections.clientHeight
}

function throttle(callback, delay) {
  let id = 0;

  return function (e) {
    if (id) {
      return;
    }

    id = setTimeout(() => {
      callback(e);
      id = 0;
    }, delay)

  };
}

refs.sections.addEventListener('scroll', throttle(handleScroll, 3000));

