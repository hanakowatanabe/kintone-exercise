/*
 * Copyright (c) 2014 Cybozu
 * Licensed under the MIT License
 */
/*jslint nomen: true, devel: true, browser: true, vars: true, plusplus: true*/
/*global 'kintone': false */
(function () {
    "use strict";
    kintone.events.on('app.record.detail.show', function (event) {
        var headerSpace = kintone.app.record.getHeaderMenuSpaceElement(),
            title = event.record['文字列__1行_'].value;
        
        headerSpace.innerHTML = '<input type="button" value="' + title + '">';
        headerSpace.style.color = '#dc143c';
    });
}());
