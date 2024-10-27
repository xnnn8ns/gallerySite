window.onload = function() {

    setTimeout(function() {

        document.body.classList.add('loaded')

        Draggable.create('.gallery', {
            bounds: 'body',
            inertia: true,
        })
    }, 2000)
}

document.querySelectorAll('.gallery__item').forEach(function(e) {
    let img = new Image, hrefURL = e.getAttribute('href')

    img.onload = function() {
        e.dataset.pswpWidth = this.width;
        e.dataset.pswpHeight = this.height;
    }

    img.src = hrefURL
})

import PhotoSwipeLightBox from '/libs/PhotoSwipe/photoswipe-lightbox.esm.min'
const lightBox = new PhotoSwipeLightBox({
    gallery: '.gallery',
    children: '.gallery__item',
    pswpModule: () => import('/libs/PhotoSwipe/photoswipe.esm.min')
})

lightBox.init()
