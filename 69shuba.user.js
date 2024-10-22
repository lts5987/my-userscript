// ==UserScript==
// @name         69shuba
// @version      2024-10-17
// @author       You
// @match        *://69shuba.cx/txt/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=69shuba.cx
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    for (let p of document.querySelectorAll('.txtnav p')) {
        p.outerHTML = p.outerHTML.replaceAll(/<br\/?>/g, '</p><p>');
    }
    for (let p of document.querySelectorAll('.txtnav p')) {
        p.innerHTML = p.innerHTML.replaceAll(/^\s+/g, '');
    }
     const all = document.querySelectorAll('.page1 a'),
          prev = all[0],
          next = all[3],
          bookmark = all[1];

    document.addEventListener('keydown', (e) => {
        console.log(e.key)
        switch(e.key) {
//             case 'ArrowLeft':
//                 if (prev) prev.click();
//                 break;
//             case 'ArrowRight':
//                 if (next) next.click();
//                 break;
            case 'b':
                if (bookmark) bookmark.click();
                break;
        }
    })
})();
