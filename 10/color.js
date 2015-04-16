/*
 * Copyright (c) 2014 Cybozu
 * Licensed under the MIT License
 */
/*jslint nomen: true, devel: true, browser: true, vars: true, plusplus: true*/
/*global 'kintone': false */
(function () {
  
    "use strict";
    var fieldColor = '#e5f0ff';
    // レコード一覧の表示時にフィールドの背景色を変更する
    kintone.events.on('app.record.index.show', function (event) {
            // ログインユーザのフィールド色
            
            // 一覧の要素を取得
            var elCustomer = kintone.app.getFieldElements('Customer');
            var elQType = kintone.app.getFieldElements('QType');
            var elStatus = kintone.app.getFieldElements('Status');
            var elLimitDay = kintone.app.getFieldElements('LimitDay');
            var elPerson = kintone.app.getFieldElements('Person');
            var elDetail = kintone.app.getFieldElements('Detail');
            //i;
  
        for (var i = 0; i < event.records.length; i++) {
            elCustomer[i].style.backgroundColor = fieldColor;
            elStatus[i].style.backgroundColor = fieldColor;
            elPerson[i].style.backgroundColor = fieldColor;
            elQType[i].style.backgroundColor = fieldColor;
            elDetail[i].style.backgroundColor = fieldColor;
            elLimitDay[i].style.backgroundColor = fieldColor;
        }
    });
                     
}());
