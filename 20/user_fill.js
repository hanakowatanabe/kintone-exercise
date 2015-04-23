/*
 * Copyright (c) 2014 Cybozu
 * Licensed under the MIT License
 */
/*jslint nomen: true, devel: true, browser: true, vars: true, plusplus: true*/
/*global 'kintone': false */
(function () {
  
    "use strict";
    kintone.events.on('app.record.create.show', function (event) {
        event.record.Person.value = [{'code': 'Yosuke Ando', 'name': "安藤 陽介"}];
        
        return event;
    });
}());
