document.querySelector('body').addEventListener('click', function() {
    document.querySelector('.header__box .right .user').classList.remove('active');
    document.querySelector('.header__box .right .notification').classList.remove('active');
});
document.querySelector('.header__box .right .user').addEventListener('click', function() {
    setTimeout(function() {
        document.querySelector('.header__box .right .user').classList.add('active');
        document.querySelector('.header__box .right .notification').classList.remove('active');
    }, 01);
});
document.querySelector('.header__box .right .notification').addEventListener('click', function() {
    setTimeout(function() {
        document.querySelector('.header__box .right .notification').classList.add('active');
        document.querySelector('.header__box .right .user').classList.REMOVE('active');
    }, 01);
});

document.querySelector('.header__burgir').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.header_menu').classList.toggle('active');
    document.querySelector('body').classList.toggle('hidden')
});

const optionBtns = document.querySelectorAll('.option .btn');
for(let i = 0; i < optionBtns.length; i++) {
    optionBtns[i].addEventListener('click', function() {
        let optionBtnsThis = this;
        setTimeout(function() {
            optionBtnsThis.classList.add('active');
        }, 01);
    });
};
document.querySelector('body').addEventListener('click', function() {
    for(let i = 0; i < optionBtns.length; i++) {
        optionBtns[i].classList.remove('active')
    };
});