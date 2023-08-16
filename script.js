var tl = gsap.timeline()
tl.from("#nav",{
    opacity:0,
    delay:0.3,
})
tl .from("#nav h1,#nav h3,#nav h4",{
    y:-80,
    opacity :0,
    duration:1,
    stagger :0.1
})
tl.from("#left h1",{
    x:-750,
    duration:0.5,
    stagger:0.2,
})
tl.from("#right img",{
    scale :0.5,
    opacity : 0,
    duration:0.5,
})

gsap.from("#page2 .box",{
    scale:0,
    opacity:0,
    duration:1,
    stagger:0.3,
    scrollTrigger:{
        trigger :"#page2 .box",
        scroller:"body", 
        // markers:true,
        start : "top 60%"
    }
})