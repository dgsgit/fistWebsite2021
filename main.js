/*ABRE E FECHA O MENU */ 
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for(const element of toggle){
    element.addEventListener('click', function(){
        nav.classList.toggle('show')
    })
}

/* QUANDO CLICAR NO ITEM DO MENU, ESCONDER O MENU*/
const links = document.querySelectorAll(`nav ul li a`)

for(const link of links){
    link.addEventListener(`click`, function(){
        nav.classList.remove(`show`)
    })
} 

/*Testemonials carousel Swiper*/
const swiper = new Swiper('.swiper-container', {
    slidesPerView:1,
    pagination:{
        el: `.swiper-pagination`
    },
    /*mostrar dois cardes */
    mousewheel:true,
    Keyboard:true,
    breakpoints:{
    767:{
        slidesPerView:2,
        stWrapperSize: true
    }
    }
});

/*Scrollreavel= mostrar elementos quando der scroll na pagina deslizando */
const scrollReveal = ScrollReveal({
    origin:`left`,
    distance: '30px',
    duration: 700,
    reset: true
})

scrollReveal.reveal('#home .text,#home .image, #about .text, #about .image , #testimonials .swiper-wrapper', {interval:100})

/*back to top*/
const backToTopButton = document.querySelector('.back-to-top')
window.addEventListener('scroll', function(){
    if(window.scrollY>= 560){
        backToTopButton.classList.add('show')
    } else{
        backToTopButton.classList.remove('show')
    }
})

/*Menu ativo conforme a secao visivel na pagina */
/*const section = document.querySelectorAll('main section[id]')
function activateMeuAtCurrentSection() {
    const checkpoint = window.pageYOffset + (window.innerHeight /8) * 4

    for (const section of section){
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAtribute('id')

        const checkpointStart = checkpoint >= sectionTop
        const checkpointEnd = checkpoint <= sectionTop + sectionHeight

        if (checkpointStart && checkpointEnd) {
            document.querySelector('nav ul li a [href*=' = sectionId + ']')
            .classList.add('active')
        } else {
            document.querySelector('nav ul li a [href*=' = sectionId + ']')
            classList.remove('active')
        }
    }

}






/*when Scroll functions */
window.addEventListener('scroll', function (){})