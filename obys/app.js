gsap.registerPlugin(ScrollTrigger)

function loaderAnimation(){
    var tl = gsap.timeline();
tl.from(".line h1" , {
    y : 150,
    stagger : 0.25,
    duration : 0.6,
    delay : 0.5
})

tl.from("#line1-part1" , {
    opacity : 0,
    onStart : function(){
        var h5Timer = document.querySelector("#line1-part1 h5");
        var grow = 0;
        setInterval(function(){
            if(grow < 100){
                grow++;
                h5Timer.innerHTML = grow;
            }
            else{
                grow = 100;
                h5Timer.innerHTML = grow;
            }
        } , 35);

    }
})

tl.to(' .line h2' , {
    animation : 'anime',
    opacity : 1

})

tl.to("#loader" , {
    opacity : 0,
    duration : 0.2,
    delay : 3.8
})

tl.from("#page1" , {
    y : 1600,
    opacity : 0,
    delay  : 0,
    ease : Power4
})

tl.to("#loader" , {
    display : 'none'
})

tl.from("nav" , {
    opacity : 0
})


tl.from(".hero h1 , .hero h2 , .hero h3" , {
    y : 150 ,
    stagger : 0.2
})

tl.from("#hero1 , #page2" , {
    opacity : 0,
} , '-= 1.2')

}

loaderAnimation();


function crsrAnimation(){
    document.addEventListener("mousemove" , function(dets){
        gsap.to("#crsr" , {
            left : dets.x ,
            top : dets.y
        })
    })
    
    Shery.makeMagnet("#nav-part2 h4" /* Element to target.*/, {
        //Parameters are optional.
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 1,
      });
}

crsrAnimation();


let cursor = document.querySelector("#page2 .cursor");
let videoContainer = document.querySelector("#page2 #video-container");
let video = document.querySelector("#page2 video");

videoContainer.addEventListener("mousemove" , function(dets){
    let rect = videoContainer.getBoundingClientRect();
    document.querySelector("#crsr").style.display = "none"
    gsap.to(cursor , {
        x : dets.x -  rect.x - 600,
        y : dets.y -  rect.y - 300
    })
})

videoContainer.addEventListener("mouseleave" , function(dets){
    let rect = videoContainer.getBoundingClientRect();
    document.querySelector("#crsr").style.display = "block"
    video.pause();
    video.style.height = "0%"
})

let toggle = false;

videoContainer.addEventListener("click" , function(){
    video.style.height = "100%"
    if(toggle === false){
        video.play();
        toggle = true;
        cursor.innerHTML = `<i class="ri-pause-circle-line"></i>`;
    }
    else{
        video.pause();
        toggle = false;
        video.style.height = "0%"
        cursor.innerHTML = `<i class="ri-play-line"></i>`;
    }
})


function sheryAnimation(){
    Shery.imageEffect(".image-div" , {
        style : 5,
        gooey : true
    })
}

sheryAnimation()


document.addEventListener('mousemove' , function(dets){
    gsap.to("#flag" , {
        x : dets.x ,
        y : dets.y
    })
})
document.querySelector("#hero3").addEventListener("mouseenter" , function(){
    gsap.to("#flag" , {
        opacity : 1
    })

    gsap.to("#crsr" , {
        opacity : 0
    })
})

document.querySelector("#hero3").addEventListener("mouseleave" , function(){
    gsap.to("#flag" , {
        opacity : 0
    })

    gsap.to("#crsr" , {
        opacity : 1
    })
})