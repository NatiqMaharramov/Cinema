/* https://api.themoviedb.org/3/search/movie?api_key=1cf50e6248dc270629e802686245c2c8&query=hard */
/* https://image.tmdb.org/t/p/w500/ */


let owlCarousel = document.querySelectorAll('.owl-carousel');


// let left = document.querySelectorAll('.left')
// let right = document.querySelectorAll('.right')

// console.log(slider_container_in[0]);
function getApi() {

  fetch('https://api.themoviedb.org/3/search/movie?api_key=1cf50e6248dc270629e802686245c2c8&query=hard')
    .then(reap => reap.json())
    .then(data => {
      // console.log(data);
      data.results.forEach((e, i) => {
        // console.log(i);
        // console.log(`https://image.tmdb.org/t/p/w500/${e.backdrop_path}`);

        if(i>0 && i<8) {
          owlCarousel[0].innerHTML += `<div class="item">
                <img src="https://image.tmdb.org/t/p/w500/${e.backdrop_path}" alt="" />
                <p>${e.original_title}</p>
               
              </div>`
        }

         else if (i >= 8 && i < 16) {
          owlCarousel[1].innerHTML += `<div class="item">
                <img src="https://image.tmdb.org/t/p/w500/${e.backdrop_path}" alt="" />
                <p>${e.original_title}</p>
              
              </div>`
        } 
        if (i >= 12 && i < 20) {
          owlCarousel[2].innerHTML += `<div class="item">
                <img src="https://image.tmdb.org/t/p/w500/${e.backdrop_path}" alt="" />
                <p>${e.original_title}</p>
   
              </div>`
        }


      });
      $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:5,
                nav:true,
                loop:false
            }
        }
    })

    })
}

getApi()

// console.log(left);
// console.log(right);
// console.log(right[0]);
// for(let j=0;j<3;j++){
// let translate = 0;
// let click = 8 - Math.round(slider_container_in[j].clientWidth / 290);
// let leftclick = 0;
// right[j].addEventListener('click', () => {
//   if (click > 0) {
//     translate -= 310;
//     console.log(slider_container_in[j]);
//     for (let i = 0; i < slider_container_in[j].children.length; i++) {
//       slider_container_in[j].children[i].style.transform = `translateX(${translate}px)`
//     }
//     click--;
//     leftclick++;
//   }
// })
// left[j].addEventListener('click', () => {
//   if (leftclick > 0) {
//     translate += 310;
//     for (let i = 0; i < slider_container_in[j].children.length; i++) {
//       slider_container_in[j].children[i].style.transform = `translateX(${translate}px)`
//     }
//     leftclick--;
//   }
// })
// }


