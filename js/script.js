var menu = document.querySelector(".nav__menu");
var logo = document.querySelector("nav__logo");
var nav = document.querySelector(".nav__link-section");
var options = document.querySelectorAll(".options__item");
let link = document.querySelectorAll(".options__text");

menu.addEventListener('click', () => {
    if (nav.classList.contains("nav_hidden"))
        nav.classList.remove("nav_hidden");
    else
        nav.classList.add("nav_hidden");
});



for (var j = 0; j < options.length; j++) {
    options[j].querySelector(".options__title").addEventListener('click', function(e) {
        var z;
        for (z = 0; z < options.length; z++) {
            if (options[z].querySelector(".options__title") == e.currentTarget) {
                break;
            }
        }
        var buf = options[z].querySelectorAll(".options__text");
        if (options[z].querySelector(".options__text").classList.contains("options__text_hidden")) {
            for (var i = 0; i < buf.length; i++) {
                buf[i].classList.remove("options__text_hidden");
            }
        } else {
            for (var i = 0; i < buf.length; i++) {
                buf[i].classList.add("options__text_hidden");
            }
        }
    })
}

for (var j = 0; j < link.length; j++) {
    link[j].addEventListener('click', function(e) {
        var z;
        for (z = 0; z < link.length; z++) {
            if (link[z] == e.currentTarget) {
                break;
            }
        }
        for (var i = 0; i < link.length; i++) {
            if (link[i].classList.contains("options__text_active")) {
                link[i].classList.remove("options__text_active");
            }
        }
        link[z].classList.add("options__text_active");
    })
}

// CONSTRUCTOR ITEMS 
(() => {
    let goodsIndent = document.querySelector('.goods__indent');
    let optionsText = document.querySelectorAll('.options__text');
    optionsText = Array.from(optionsText);

    optionsText.forEach(item => {
        item.addEventListener('click', () => {
            let allItems = document.querySelectorAll('.goods__item:not(.goods__item_example)');
            allItems = Array.from(allItems);

            for (let i = 0; i < allItems.length; i++) {
                goodsIndent.removeChild(allItems[i]);
            }

            getGoodsForName(item.getAttribute('data-name-section'));
        });
    });


    let goodsExample = document.querySelector('.goods__item_example');


    function createItems(options) {
        let item = goodsExample.cloneNode(true);
        item.classList.remove('goods__item_example');
        item.querySelector('.goods__image-photo').setAttribute('src', options.photoSrc);
        item.querySelector('.goods__image').setAttribute('src', options.linkSrc);
        item.querySelector('.goods__description').innerHTML = options.description;

        item.querySelector('.goods__image').addEventListener('click', e => {
            e.preventDefault();
            // if (document.querySelector('.popup').classList.contains('popup_hidden')) {
            //     document.querySelector('.popup').classList.remove('popup_hidden');
            //     document.body.style.background = 'rgba(0, 0, 0, .7)';
            //     document.body.style.overflow = 'hidden';
            //     for (let j = 0; j < document.querySelectorAll('.goods__image').length; j++) {
            //         document.querySelectorAll('.goods__item')[j].style.opacity = '.3';
            //     }

            // }
        });

        goodsIndent.appendChild(item);

    }

    function getGoodsForName(name) {
        window.allGoods.forEach(item => {
            if (item.nameCategory === name) {
                for (let i = 0; i < item.goods.length; i++) {
                    createItems(item.goods[i]);
                }
            }
        });
    }
    window.constructorGoods = getGoodsForName;
})();

let menuItem = document.querySelectorAll('.nav__link');
let mainMenu = document.querySelector('.header__menu');

// function myFunction(x) {
//     if (x.matches) {
//         for (let i = 0; i < menuItem.length - 1; i++) {
//             if (menuItem[i].textContent == 'категории') {
//                 menuItem[i].innerHTML = '<a href="categories.html" class="nav__link">категории</a>';
//             }
//         }
//     }
// }

// let x = window.matchMedia("(max-width: 820px)");
// myFunction(x);
// x.addListener(myFunction);

for (let i = 0; i < menuItem.length - 1; i++) {
    if (menuItem[i].textContent == 'категории' || mainMenu.onmouseover) {
        menuItem[i].onmouseover = function() {
            if (window.innerWidth > 820)
                document.querySelector('.header__menu_hidden').style.display = 'block';
        }
        mainMenu.onmouseover = function() {
            document.querySelector('.header__menu_hidden').style.display = 'block';
        }
        menuItem[i].onmouseout = function() {
            document.querySelector('.header__menu_hidden').style.display = 'none';
        }
        mainMenu.onmouseout = function() {
            document.querySelector('.header__menu_hidden').style.display = 'none';
        }
    }
}

// const cross = document.querySelector('.popup__cross');
// cross.addEventListener('click', () => {
//     document.querySelector('.popup').classList.add('popup_hidden');
//     document.body.style.overflow = 'scroll';
//     document.body.style.background = '#ffffff';
//     for (let j = 0; j < document.querySelectorAll('.goods__image').length; j++) {
//         document.querySelectorAll('.goods__item')[j].style.opacity = '1';
//     }
// });