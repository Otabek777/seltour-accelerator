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