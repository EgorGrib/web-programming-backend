window.addEventListener("load", () => {
    let reference = document.location.href.split('/')[3].split('.')[0];
    console.log(reference);
    switch(reference){
        case '':
        case 'index':
            document.getElementsByClassName('menu-item')[0].classList.add('active-item');
            break;
        case 'iphone':
            document.getElementsByClassName('nav-item')[0].classList.add('active-item');
            break;
        case 'macbook':
            document.getElementsByClassName('nav-item')[1].classList.add('active-item');
            break;
        case 'ipad':
            document.getElementsByClassName('nav-item')[2].classList.add('active-item');
            break;
        case 'watch':
            document.getElementsByClassName('nav-item')[3].classList.add('active-item');
            break;
    }
});