let tl = gsap.timeline();
let tl2 = gsap.timeline()
tl.to(".loading",{
    height:0,
    duration:.5,
    delay:1.7,
})
tl.from("#head h1",{
    y:-100,
    opacity:0,
    duration:.5,
    delay:.2,
},"a")
tl.from(".mainsvg svg",{
    y:-100,
    opacity:0,
    delay:.2,
    duration:.5,  
},"a")
gsap.from(".social .sheading",{
    y:100,
    opacity:0,
    duration:1.2,
    scrollTrigger:{
        trigger:".social ",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end : "top 45%",
        scrub:1.5,
    }
})
gsap.from(".social .grid",{
    opacity:0,
    duration:1.2,
    x:-100,
    scrollTrigger:{
        trigger:".social ",
        scroller:"body",
        // markers:true,
        start:"top 50%%",
        end : "top 45%",
        scrub:1.5,
    }
})

gsap.from(".p1p2 h1",{
    y:100,
    duration:1,
    opacity:0,
    scrollTrigger:{
        trigger:".p1p2",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:1.5

    }
})

let p = document.querySelectorAll(".pp1p2");
p.forEach((e)=>{
    gsap.to(e,{
        duration:1.,
        onStart:()=>{
            e.classList.add("animate")
        },
        scrollTrigger:{
            trigger:e,
            scroller:"body",
            start:"top 80%",
            
        }
    })
})
gsap.from(".p1p3 h1",{
    y:50,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".page3 h1",
        // start:"top 50%",
        scroller:"body",
        // markers:true,
        end:"top 20%",
        scrub:1,
    }
})
gsap.from(".p1p3 p",{
    y:50,
    opacity:0,
    // scale:0,
    duration:1,
    scrollTrigger:{
        trigger:".page3 h1",
        // start:"top 50%",
        scroller:"body",
        // markers:true,
        end:"top 20%",
        scrub:1,
    }
})
let p1p3i = document.querySelectorAll(".p1p3i")
p1p3i.forEach(e=>{
    gsap.from(e,{
        y:50,
        duration:1,
        scrollTrigger:{
            trigger:".p2p3",
            scroller:"body",
            // markers:true
            scrub:1,
        }
    })
})

gsap.from(".p4gi1s2 p",{
    y:50,
    duration:.5,
    opacity:0,
    scrollTrigger:{
        trigger:".p4gi1s2",
        scroller:"body",
        // markers:true,
        start:"top 60%"
    }
})
gsap.from(".p4gi2s2 p",{
    y:50,
    duration:.5,
    opacity:0,
    scrollTrigger:{
        trigger:".p4gi2s2",
        scroller:"body",
        // markers:true,
        start:"top 80%"
    }
})
gsap.from(".p4gi3s2 p",{
    y:50,
    duration:.5,
    opacity:0,
    scrollTrigger:{
        trigger:".p4gi3s2",
        scroller:"body",
        // markers:true,
        start:"top 80%"
    }
})
gsap.from(".p4gi4s2 p",{
    y:50,
    duration:.5,
    opacity:0,
    scrollTrigger:{
        trigger:".p4gi4s2",
        scroller:"body",
        // markers:true,
        start:"top 80%"
    }
})
let p5item = document.querySelectorAll(".p5s1items");
p5item.forEach((e)=>{
    gsap.to(e,{
        duration:1.,
        onStart:()=>{
            e.classList.add("animation")
        },
        scrollTrigger:{
            trigger:e,
            scroller:"body",
            start:"top 80%",
            // markers:true,
            
        }
    })
})
let body = document.body
gsap.to(body,{
    backgroundColor: "black",
    duration:.2,
    scrollTrigger:{
        trigger:".page5",
        scroll:"body",
        // markers:true,
        scrub:true,
    }
})
let page6 = document.getElementById("page6");
let grid = document.getElementById("page6Grid");

page6.addEventListener("mousemove",(e)=>{
    let xper = Math.floor(e.x*100/screen.width);
    let yper = Math.floor(e.y*100/screen.height);
    gsap.to(grid,{
        transform: `translateX(-${xper}px) translateY(-${yper}px)`
    })
})