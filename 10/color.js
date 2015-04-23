/*
 * Copyright (c) 2014 Cybozu
 * Licensed under the MIT License
 */
/*jslint nomen: true, devel: true, browser: true, vars: true, plusplus: true*/
/*global 'kintone': false */
(function () {
  
    "use strict";
    // レコード一覧の表示時にフィールドの背景色を変更する
    kintone.events.on('app.record.index.show', function (event) {
            // ログインユーザのフィールド色
        //<SCRIPT language="JavaScript">
           // <!--
        var bgc = new Array(7);
        bgc[0] = '#87cefa';
        bgc[1] = '#adff2f';
        bgc[2] = '#ffd700';
        bgc[3] = '#ff6347';
        bgc[4] = '#d3d3d3';
        bgc[5] = '#4b0082';
        var n = Math.floor(Math.random()*7);
        var fieldColor = bgc[n],
            // 一覧の要素を取得
            elCustomer = kintone.app.getFieldElements('Customer'),
            elStatus = kintone.app.getFieldElements('Status'),
            elPerson = kintone.app.getFieldElements('Person'),
            elQType = kintone.app.getFieldElements('QType'),
            elDetail = kintone.app.getFieldElements('Detail'),
            elLimitDay = kintone.app.getFieldElements('LimitDay'),
            i;
        
  //#87cefa、#adff2f、#ffd700、#ff6347、#d3d3d3、#4b0082
        for (i = 0; i < event.records.length; i++) {
            if (i % 2 === 1) {
                elCustomer[i].style.backgroundColor = fieldColor;
                elStatus[i].style.backgroundColor = fieldColor;
                elPerson[i].style.backgroundColor = fieldColor;
                elQType[i].style.backgroundColor = fieldColor;
                elDetail[i].style.backgroundColor = fieldColor;
                elLimitDay[i].style.backgroundColor = fieldColor;
            }
        }
    }); 
}());
