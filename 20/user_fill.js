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
        var nnn = [["shun-aikawa","shun-aikawa"] , [user.code, user.name]];
        event.record.Person.value = [{'code': nnn[0][0], 'name': nnn[0][1]},{'code': nnn[1][0], 'name': nnn[1][1]}];
        return event;
    });
}());