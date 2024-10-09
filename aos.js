AOS.init();

        let textRelative = document.getElementById('text-relative');

        let imgRgb = document.getElementById('img-rgb');

        window.addEventListener('scroll', function () {
            let value = window.scrollY;

            textRelative.style.left = value * 1.5 + 'px';
            imgRgb.style.top = value * -1.5 + 'px'
        })

        VanillaTilt.init(document.querySelectorAll(".item"), {
            max: 5,
            speed: 500,
            glare: true,
            "max-glare": 0.5
        });

        var swiper = new Swiper('.swiper-container', {
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            coverflowEffect: {
                rotate: 1,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            },
            pagination: {
                el: '.swiper-pagination',
            },
            loop: true,
            autoplay: {
                delay: 3000
            }
        });