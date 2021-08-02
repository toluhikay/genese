const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = docment.querySelector('.links');

    burger.addEventListener('click', () =>{
        nav.classList.toggle('nav-active');
    });
}

navSlide();