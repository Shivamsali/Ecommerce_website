const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimenstions = item.getBoundingClientRect();
    let containerWidth = containerDimenstions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

const popup = document.querySelector('.popup');
const close = document.querySelector('.close');
    window.onload = function(){
        setTimeout(function(){
            popup.style.display = "block"

            // Add some time delay to show popup
        }, 2000)
    }
    close.addEventListener('click', () => {
        popup.style.display = "none";
    })
