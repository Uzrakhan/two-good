let locoScroll;
function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();



}
locomotiveAnimation();
console.log("Locomotive Scroll:", locoScroll);


function navbarAnimation() {
    gsap.to("#nav-part1 svg", {
        transform: "translateY(-100%)",
        scrollTrigger: {
            trigger:"#page1",
            scroller:"#main",
            start:"top 0",
            end:"top -5%",
            scrub: true
        }
    })
    
    gsap.to("#nav-part2 #links", {
        transform: "translateY(-100%)",
        opacity:0,
        scrollTrigger: {
            trigger:"#page1",
            scroller:"#main",
            start:"top 0",
            end:"top -5%",
            scrub: true
        }
    })
}

navbarAnimation();

function loadinganimation() {
    gsap.from("#page2-1 h1", {
        y:100,
        opacity:0,
        delay: 0.5,
        duration: 0.9,
        stagger: 0.3
    })

    /*gsap.from(".child p", {

        y:100,
        opacity:0,
        delay: 2,
        duration: 0.9,
        stagger: 0.3
    })
    */

    gsap.from(".child img", {
        scrollTrigger: {
            trigger: ".child",
            scroller: "#main",
            start: "top 80%",
            toggleActions: "play none none none"
        },
        opacity: 0,
        y: 50,
        duration: 1.5,
        ease: "power2.out"
    })

    gsap.from(".row .child- img", {
        scrollTrigger: {
            trigger: ".row",
            scroller: "#main",
            start: "top 80%",
            toggleActions: "play none none none"
        },
        opacity: 0,
        y: 50,
        duration: 3,
        ease: "power2.out"
    })





    gsap.from(".child- #text1", {
        scrollTrigger:{
            trigger: ".child-",
            scroller: "#main",
            start: "top 80%",
            toggleActions: "play none none none"
        },
        opacity: 0,
        y: 50,
        duration: 6,
        ease: "power2.out"
    })


    gsap.from(".row1 .child- img", {
        scrollTrigger: {
            trigger: ".row1",
            scroller: "#main",
            start: "top 80%",
            toggleActions: "play none none none"
        },
        opacity: 0,
        y: 50,
        duration: 6.5,
        ease: "power2.out"
    })

    gsap.from(".row2 .child- img", {
        scrollTrigger: {
            trigger: ".row2",
            scroller: "#main",
            start: "top 80%",
            toggleActions: "play none none none"
        },
        opacity: 0,
        y: 50,
        duration: 8,
        ease: "power2.out"
    })

    gsap.from(".child- #text2", {
        scrollTrigger:{
            trigger: ".child-",
            scroller: "#main",
            start: "top 80%",
            toggleActions: "play none none none"
        },
        opacity: 0,
        y: 50,
        duration: 9,
        ease: "power2.out"
    })

    gsap.from(".row3 .child- img",{
        scrollTrigger: {
            trigger: ".row3",
            scroller: "#main",
            start: "top 80%",
            toggleActions: "play none none none"
        },
        opacity: 0,
        y: 50,
        duration: 5,
        ease: "power2.out"
    })

    gsap.from(".row4 .child- img", {
        scrollTrigger:{
            trigger: ".row4",
            scroller: "#main",
            start: "top 90%",
            toggleActions: "play none none none"
        },
        opacity: 0,
        y: 50,
        duartion: 10,
        ease: "power2.out"
    })
    
}
loadinganimation();


function cursorAnimation() {
    document.addEventListener("mousemove", function(dets) {
        gsap.to("#cursor", {
            left:dets.x,
            top:dets.y
        })
    })
    
    
    document.querySelectorAll(".child").forEach(function(elem) {
        elem.addEventListener("mouseenter",function() {
            gsap.to("#cursor", {
                transform: 'translate(-50%, -50%) scale(0)'
            });
        });
        elem.addEventListener("mouseleave",function() {
            gsap.to("#cursor", {
                transform: 'translate(-50%, -50%) scale(1)'
            });
        });
    
    });
}

cursorAnimation();

