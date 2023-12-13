searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').addEventListener('click', function() {
    searchForm.classList.toggle('active');
})

window.onscroll = function() {
    searchForm.classList.remove('active');

    if(window.scrollY > 80){
        document.querySelector('.header .header-2').classList.add('active');
    } else {
        document.querySelector('.header .header-2').classList.remove('active');
    }
}

window.onload = function() {
    if(window.scrollY > 80){
        document.querySelector('.header .header-2').classList.add('active');
    } else {
        document.querySelector('.header .header-2').classList.remove('active');
    }

    fadeOut();
}



document.querySelector('#loginID').addEventListener('click', function() {
     generateToastMessage("System error! Please try again later");
});






 

function  generateToastMessage(msg) {
   
        div = document.createElement('div');
        div.innerText = msg;
        div.classList = 'toast-message toast-message-slide-in  ';
 
    div.addEventListener('click' , function() {
       div.classList.remove = 'toast-message-slide-in' ;
       div.classList = 'toast-message-slide-out';
       div.addEventListener('animationend', function() {
       div.remove();
       div = null ;
    });
    })
 
    document.body.appendChild(div);
};


function loader() {
   document.querySelector('.loader').classList.add('active');
};

function fadeOut(){
   setTimeout(loader,3000);
};



let loginForm = document.querySelector('.login-form-container');

document.querySelector('#login-btn').addEventListener('click' , function() {
     loginForm.classList.toggle('active');
});

document.querySelector('#close-btn').addEventListener('click' , function() {
    loginForm.classList.remove('active') ;
});


var swiper = new Swiper(".books-slider", {
    loop:true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        
      },
      768: {
        slidesPerView: 1,
    
      },
      1224: {
        slidesPerView: 3,
 
      },
    },
  });

  
var swiper = new Swiper(".featured-slider", {
    spaceBetween:10,
    loop:true,
    centeredSlides: true,
    autoplay: {
        delay:5000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }, 
    breakpoints: {
      0: {
        slidesPerView: 1,
        
      },
      300: {
        slidesPerView: 1,
    
      }, 
      650: {
        slidesPerView: 2,
    
      },
      768: {
        slidesPerView: 3,
    
      },
      1024: {
        slidesPerView: 4,
 
      },
    },
  });





  // document.querySelector('.btn').addEventListener('click', function() {
  //   alert("request success");
  // });


  
var swiper = new Swiper(".arrivals-slider", {
    spaceBetween:10,
    loop:true,
    centeredSlides: true,
    autoplay: {
        delay:5000,
        disableOnInteraction: false,
    },
  
    breakpoints: {
      0: {
        slidesPerView: 1,
        
      },


      768: {
        slidesPerView: 2,
    
      },
      1024: {
        slidesPerView: 3,
 
      },
    },
  });

   
var swiper = new Swiper(".arrivals-slider2", {
    spaceBetween:10,
    loop:true,
    centeredSlides: true,
    autoplay: {
        delay:7000,
        disableOnInteraction: false,
    },
  
    breakpoints: {
      0: {
        slidesPerView: 1,
        
      },


      768: {
        slidesPerView: 2,
    
      },
      1024: {
        slidesPerView: 3,
 
      },
    },
  });


   
var swiper = new Swiper(".review-slider", {
  spaceBetween:10,
  loop:true,
  centeredSlides: true,
  grapCursor: true,
  autoplay: {
      delay:8000,
      disableOnInteraction: false,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      
    },


    768: {
      slidesPerView: 2,
  
    },
    1024: {
      slidesPerView: 3,

    },
  },
});


   
var swiper = new Swiper(".blogs-slider", {
  spaceBetween:10,
  loop:true,
  centeredSlides: true,
  grapCursor: true,
  autoplay: {
      delay:10000,
      disableOnInteraction: false,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      
    },


    768: {
      slidesPerView: 2,
  
    },
    1024: {
      slidesPerView: 3,

    },
  },
});