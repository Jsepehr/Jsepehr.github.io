const centrale = document.querySelector('.centrale');
const bigUls = document.getElementsByTagName('ul');
var princi = document.getElementsByClassName('princi');
var leftPart = document.getElementsByClassName('left-part');
var rightPart = document.getElementsByClassName('right-part');
var cerchio = document.getElementsByClassName('cerchio');
const sidebar = document.querySelector('.sidebar');
const education = document.querySelector('.education');
const skill = document.querySelector('.skill');
const button2 = document.querySelector('.button2');
var dbsize = document.body.clientWidth;
var _width = ((dbsize - 430) / dbsize) * 100;
var left = 0;
const limit = 1050;
var rscBoolean = false;
var resumeOpenClose = false;

windchanged();
window.onresize = windchanged;

function windchanged() {
    dbsize = document.body.clientWidth;
    if (dbsize < 1250 && dbsize > limit) {
        skill.style.minWidth = '250px';
        education.style.minWidth = '250px';
        for (let i = 0; i < princi.length; i++) {
            princi[i].style.display = 'flex';
            princi[i].style.flexDirection = 'column';
            leftPart[i].style.textAlign = 'left';
            leftPart[i].style.paddingBottom = '0px';
            leftPart[i].style.paddingLeft = '15px';
            leftPart[i].style.borderLeft = 'solid rgb(195, 195, 195) 1px';
            rightPart[i].style.paddingTop = '0';
            cerchio[i].style.left = '-8px';
        }

    }
    if (dbsize >= 1250 || dbsize < limit) {
        education.style.minWidth = '';
        skill.style.minWidth = '';
        for (let i = 0; i < princi.length; i++) {

            princi[i].style.display = '';
            princi[i].style.flexDirection = '';
            leftPart[i].style.textAlign = '';
            leftPart[i].style.paddingBottom = '';
            leftPart[i].style.paddingLeft = '';
            leftPart[i].style.borderLeft = '';
            rightPart[i].style.paddingTop = '';
            cerchio[i].style.left = '';
        }

    }
    if (dbsize > limit) {
        anime.style.display = 'none';
        animeCtn.style.display = 'none';
        hamImg.style.display = 'none';
        colonnaImmagine.style.display = '';
        sidebar.style.display = '';
        button2.style.display = '';
    } else {
        button2.style.display = 'inline-block'
        anime.style.display = 'none';
        animeCtn.style.display = 'none';
        hamImg.style.display = '';
        colonnaImmagine.style.display = 'none';
        sidebar.style.display = 'none';
        skill.style.minWidth = '250px';
        education.style.minWidth = '250px';
    }

    //parte decisivo

    if (dbsize < (limit - 330) && resumeOpenClose == true) {

        rscBoolean = true;

        
    } else {
        if (resumeOpenClose == true) {
            rscBoolean = false;
            
        }
       
    }

    if (resumeOpenClose == true && dbsize < limit -330) {

        rsc.style.display = 'inline-block';
        rsc.style.margin = '50px auto';
        rsc.style.width = '80%';

    } else if (dbsize > limit -330 && resumeOpenClose == true) {

        rsc.style.display = 'grid';
        rsc.style.margin = '';
        rsc.style.width = '';
    }else if(resumeOpenClose == false){
        rsc.style.display = 'none';
    }


    if (dbsize < limit) {
        left = 0;
        _width = 100;
    } else {
        _width = ((dbsize - 430) / dbsize) * 100;
        left = 100 - _width;
    }

    centrale.style.left = left + '%';
    centrale.style.width = _width + "%";
}


function homeBig() {

    centralClose()
    setTimeout(function () {
        displayThis('h')
    }, 690);

    setTimeout(function () {

        centralOpen()
    }, 700);

}

function resumeBig() {
    centralClose()
    setTimeout(function () {
        displayThis('r')
    }, 690);

    setTimeout(function () {

        centralOpen()
    }, 700);

}

function portfolioBig() {
    centralClose()
    setTimeout(function () {
        displayThis('p')
    }, 690);

    setTimeout(function () {

        centralOpen()
    }, 700);
}

function contactsBig() {
    centralClose()
    setTimeout(function () {
        displayThis('c')
    }, 690);

    setTimeout(function () {

        centralOpen()
    }, 700);
}



function centralOpen() {
    setTimeout(function () {
        _width = _width + ((6 / dbsize) * 100);
        if (_width >= 100 - left) {
            return;
        }
        centrale.style.width = _width + "%";
        centralOpen()
    }, 1);
}


function centralClose() {
    setTimeout(function () {
        _width = _width - ((9 / dbsize) * 100);
        if (_width <= 0) {
            return;
        }
        centrale.style.width = _width + "%";
        centralClose()
    }, 1);

}

function displayThis(x) {
    switch (x) {
        case "h":
            resumeOpenClose = false;
            home.style.display = 'flex';
            contact.style.display = 'none';
            rsc.style.display = "none";
            port.style.display = 'none';
            if (bigUls[0].querySelector('.homeimg').getAttribute('style') == 'transform: rotate(0deg);') {
                bigUls[0].querySelector('.homeimg').setAttribute('style', 'transform: rotate(45deg);');
                for (let i = 0; i < 4; i++) {
                    if (i !== 0) {
                        if (bigUls[i].querySelector('.homeimg').getAttribute('style') !== 'transform: rotate(0deg);') {
                            bigUls[i].querySelector('.homeimg').setAttribute('style', 'transform: rotate(0deg);');
                        }
                    }

                }
            }

            break;
        case "r":
            resumeOpenClose = true;
            home.style.display = 'none';
            contact.style.display = 'none';
            rsc.style.display = "grid";
            console.log('grid 2');
            port.style.display = 'none';

            if (bigUls[1].querySelector('.homeimg').getAttribute('style') == 'transform: rotate(0deg);') {

                bigUls[1].querySelector('.homeimg').setAttribute('style', 'transform: rotate(45deg);');
                for (let i = 0; i < 4; i++) {

                    if (i !== 1) {

                        if (bigUls[i].querySelector('.homeimg').getAttribute('style') !== 'transform: rotate(0deg);') {
                            bigUls[i].querySelector('.homeimg').setAttribute('style', 'transform: rotate(0deg);');
                        }
                    }

                }
            }
            break;
        case "p":
            resumeOpenClose = false;
            home.style.display = 'none';
            contact.style.display = 'none';
            rsc.style.display = "none";
            port.style.display = 'block';
            if (bigUls[2].querySelector('.homeimg').getAttribute('style') == 'transform: rotate(0deg);') {

                bigUls[2].querySelector('.homeimg').setAttribute('style', 'transform: rotate(45deg);');
                for (let i = 0; i < 4; i++) {

                    if (i !== 2) {

                        if (bigUls[i].querySelector('.homeimg').getAttribute('style') !== 'transform: rotate(0deg);') {
                            bigUls[i].querySelector('.homeimg').setAttribute('style', 'transform: rotate(0deg);');
                        }
                    }

                }
            }

            break;
        case "c":
            resumeOpenClose = false;
            home.style.display = 'none';
            contact.style.display = 'block';
            rsc.style.display = "none";
            port.style.display = 'none';
            if (bigUls[3].querySelector('.homeimg').getAttribute('style') == 'transform: rotate(0deg);') {

                bigUls[3].querySelector('.homeimg').setAttribute('style', 'transform: rotate(45deg);');
                for (let i = 0; i < 4; i++) {

                    if (i !== 3) {

                        if (bigUls[i].querySelector('.homeimg').getAttribute('style') !== 'transform: rotate(0deg);') {
                            bigUls[i].querySelector('.homeimg').setAttribute('style', 'transform: rotate(0deg);');
                        }
                    }

                }
            }

            break;
    }


}