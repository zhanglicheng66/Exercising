bb.onclick = function () {
    bb.querySelector('.circle')
        .classList.add('active')

}

bb.querySelector('.circle').addEventListener('transitionend',
    function () {
        bb.querySelector('.circle')
            .classList.remove('active')
    })