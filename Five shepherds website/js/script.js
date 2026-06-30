/*==================================================
FIVE SHEPHERDS CORPORATION
Main JavaScript
Version 1.0
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*========================
    Sticky Navigation
    ========================*/

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if(window.scrollY > 50){

            navbar.style.boxShadow = "0 15px 40px rgba(0,0,0,.10)";
            navbar.style.background = "rgba(255,255,255,.97)";

        }else{

            navbar.style.boxShadow = "none";
            navbar.style.background = "rgba(255,255,255,.92)";

        }

    });

    /*========================
    Smooth Scroll
    ========================*/

    document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

        anchor.addEventListener("click",function(e){

            const target=document.querySelector(this.getAttribute("href"));

            if(target){

                e.preventDefault();

                target.scrollIntoView({

                    behavior:"smooth"

                });

            }

        });

    });

    /*========================
    Reveal Animation
    ========================*/

    const reveals=document.querySelectorAll(
        ".product-card,.feature-box,.app-card,.company-card,.section-title"
    );

    const observer=new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.style.opacity="1";
                entry.target.style.transform="translateY(0px)";

            }

        });

    },{

        threshold:.15

    });

    reveals.forEach(item=>{

        item.style.opacity="0";
        item.style.transform="translateY(60px)";
        item.style.transition=".8s";

        observer.observe(item);

    });

    /*========================
    Animated Counter
    ========================*/

    const stats=document.querySelectorAll(".stats h2");

    stats.forEach(stat=>{

        let value=stat.innerText;

        if(isNaN(parseInt(value))) return;

        let target=parseInt(value);

        let count=0;

        let speed=Math.ceil(target/80);

        function update(){

            count+=speed;

            if(count>target){

                count=target;

            }

            stat.innerText=count;

            if(count<target){

                requestAnimationFrame(update);

            }

        }

        update();

    });

    /*========================
    Product Card Hover
    ========================*/

    const products=document.querySelectorAll(".product-card");

    products.forEach(card=>{

        card.addEventListener("mouseenter",()=>{

            card.style.transition=".35s";

        });

    });

});