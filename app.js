Shery.mouseFollower({debug: true});
Shery.makeMagnet(".magnet");
Shery.hoverWithMediaCircle(".hvr", {images: ["https://images.unsplash.com/photo-1698825810702-10bb885eec26?auto=format&fit=crop&q=80&w=1932&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1516410529446-2c777cb7366d?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"]});

let btn = document.querySelector("#textabout button")

btn.addEventListener("mouseover",()=>{
    document.getElementById("btn1").style.color = "#000"
})
btn.addEventListener("mouseleave",()=>{
    document.getElementById("btn1").style.color = "#fff"
})

let tl = gsap.timeline();
tl.from("#nav", {
    y: -10,
    opacity: 0,
    ease: Expo.easeInOut,
    duration: 1.5
})
tl.to("#heading h1, .block h5, #rheading h5",{
    y: 0,
    opacity: 1,
    ease: Expo.easeInOut,
    duration: 2,
    delay: -1,
})
tl.from("#herofooter",{
    y:-10,
    opacity: 0,
    duration: 1.5,
    delay: -1,
    ease: Expo.easeInOut
})


document.querySelectorAll(".elem").forEach(function(elem){
    var rotate = 0;
    var diffrot = 0;
    elem.addEventListener("mouseleave", function(dets){
        gsap.to(elem.querySelector("img"),{
            opacity: 0,
            ease: Power3,
            duration: 0.5
        })
    })
    elem.addEventListener("mousemove", function(dets){
        var diff = dets.clientY - elem.getBoundingClientRect().top;
        diffrot = dets.clientX - rotate;
        rotate = dets.clientX;
        gsap.to(elem.querySelector("img"),{
            opacity: 1,
            ease: Power3,
            top: diff,
            left: dets.clientX,
            rotate: gsap.utils.clamp(-20,20, diffrot)
        })
    })
});

gsap.from(".elem",{
    scrollTrigger:{
        trigger: "#heading h1",
        start: "top top",
        end: "bottom bottom",
    },
    y: `100`,
    duration: 0.8,
    opacity: 0,
    ease: Power4
})

gsap.from("#about img",{
    scrollTrigger:{
        trigger: ".last",
        start: "top 20%",
        end: "bottom bottom",
    },
    x: `-100`,
    duration: 0.8,
    opacity: 0,
    ease: Power4
},"about")
gsap.from("#textabout",{
    scrollTrigger:{
        trigger: ".last",
        start: "top 20%",
        end: "bottom bottom",
    },
    x: `100`,
    duration: 0.8,
    opacity: 0,
    ease: Power4    
},"about")

