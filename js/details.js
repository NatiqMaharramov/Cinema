let owlcarousel=document.querySelector('.owl-carousel')
console.log(owlcarousel);

// console.log(slider_container_inch);

function getApi(){
    fetch('https://api.themoviedb.org/3/search/movie?api_key=1cf50e6248dc270629e802686245c2c8&query=hard ')
    .then(resp=>resp.json())


    .then(data=>{
        data.results.forEach((x,i) => {

          
                owlcarousel.innerHTML+=`
                <div class="item">
                <img src="https://image.tmdb.org/t/p/w500/${x.backdrop_path}" alt="" />
                <p>${x.original_title}</p>
    
              </div>`
        });
   $(document).ready(function(){
        $('.owl-carousel').owlCarousel({
            loop:true,
            margin:20,
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
      });

    })
 
}

getApi()


