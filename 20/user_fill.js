/*
 * Copyright (c) 2014 Cybozu
 * Licensed under the MIT License
 */
/*jslint nomen: true, devel: true, browser: true, vars: true, plusplus: true*/
/*global 'kintone': false */
(function () {
  
    "use strict";
    kintone.events.on('app.record.create.show', function (event) {
        var user = kintone.getLoginUser();
        //var hito = [];
       // hito[0] = {'code': user.code, 'name': user.name};
        //hito[1] = 
           // , {'code': chiharu-inoue, 'name': chiharu-inoue}];
        event.record.Person.value = [{'code': user.code, 'name': user.name}];
        return event;
    });
}());
