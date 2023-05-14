const anime = document.querySelector('.ctn_ham');
const animeCtn = document.querySelector('.ctn');
const ctn_close = document.querySelector('.ctn_cl');
const rows = document.getElementsByClassName('row');
const list = document.querySelector('.listContainer');
const home = document.querySelector('.home');
const contact = document.querySelector('.contact_me');
const port = document.querySelector('.portfolio');
const hamImg = document.querySelector('.ham-img');
const colonnaImmagine = document.querySelector('.immagine');
const rsc = document.querySelector('.resume-contenuto');

var state;
var i = 0;
//home.style.display = 'none';

contact.style.display = 'none';
rsc.style.display = "none";
port.style.display = 'none';
animeCtn.style.display = 'none';

function hamCover() {
   
    hamImg.style.display = 'none';
    anime.style.display = 'block';
    animeCtn.style.display = 'flex';
    openfun()
}

function home1() {
    resumeOpenClose = false;
    port.style.display = 'none';
    rsc.style.display = 'none';
    contact.style.display = 'none';
    setTimeout(function () {
        home.style.display = 'flex';
    }, 750);

    closefun();
}

function resume() {
    resumeOpenClose = true;
    port.style.display = 'none';
    home.style.display = 'none';
    contact.style.display = 'none';
    setTimeout(function () {  
console.log(resumeOpenClose);
        if (dbsize < limit - 330) {
            console.log('inline-block 2');
            rsc.style.display = 'inline-block';
            rsc.style.margin = '0 auto';
            rsc.style.width = '60%';
            
        }else if (dbsize > limit - 330 && resumeOpenClose == true){
            console.log('grid 1');
            rsc.style.display = 'grid';
            rsc.style.margin = '';
            rsc.style.width = '';
        }
        
    }, 750);
    closefun();
}

function contacts() {
    resumeOpenClose = false;
    rsc.style.display = 'none';
    home.style.display = 'none';
    port.style.display = 'none';
    setTimeout(function () {
        contact.style.display = 'block';
    }, 750);

    closefun();
}

function portfolio() {
    resumeOpenClose = false;
    rsc.style.display = 'none';
    home.style.display = 'none';
    contact.style.display = 'none';

    setTimeout(function () {
        port.style.display = 'block';
    }, 750);
    closefun();

}


function openfun() {
    state = animeCtn.getAttribute('data-opnstate');
    if (state === '0') {
        animeCtn.setAttribute('data-opnstate', '1');
        anime.classList.add('open');
        animeCtn.classList.add('open');
        setTimeout(function () {
            ctn_close.classList.remove('hide');
            animeCtn.classList.add('open1');
            list.classList.add('listOpen');
            setTimeout(function () {
                ctn_close.classList.add('open');
                i = 0;
                rowAnime();


            }, 400);

        }, 200);

    }


}

function rowAnime() {

    setTimeout(function () {
        rows[i].classList.remove('widthDown');
        rows[i].classList.add('widthUp');
        i++;
        if (i < 4) rowAnime();
    }, 100);

}

function rowAnimeClose() {

    setTimeout(function () {
        rows[i].classList.remove('widthUp');
        rows[i].classList.add('widthDown');
        i++;
        if (i < 4) rowAnimeClose();
    }, 100);

}

function closefun() {
    i = 0;
    rowAnimeClose();
    setTimeout(function () {

        ctn_close.classList.remove('open');
        ctn_close.classList.add('hide');
        animeCtn.classList.remove('open');
        animeCtn.classList.remove('open1');
        animeCtn.classList.add('goUp');
        setTimeout(function () {

            animeCtn.classList.remove('goUp');
            animeCtn.classList.add('turnBack');
            anime.classList.remove('open');
        }, 500);
        setTimeout(function () {
            animeCtn.classList.remove('turnBack');
            animeCtn.setAttribute('data-opnstate', '0');
            anime.style.display = 'none';
            animeCtn.style.display = 'none';
            hamImg.style.display = 'block';
        }, 700);
    }, 500);


}