/*
 * Licensed under the MIT License
 */
(function () {
  
    "use strict";
    // レコード一覧の表示時にフィールドの背景色を変更する
    kintone.events.on('app.record.index.show', function (event) {
        var fieldColor = '#e5f0ff';        // ログインユーザのフィールド色
  
        // 一覧の要素を取得
        var elCustomer = kintone.app.getFieldElements('Customer');
        var elStatus = kintone.app.getFieldElements('Status');
        var elPerson = kintone.app.getFieldElements('Person');
        var elQType = kintone.app.getFieldElements('QType');
        var elDetail = kintone.app.getFieldElements('Detail');
        var elLimitDay = kintone.app.getFieldElements('LimitDay');
  
        for (var i = 0; i < event.records.length; i++) {
            elCustomer[i].style.backgroundColor = fieldColor;
            elStatus[i].style.backgroundColor = fieldColor;
            elPerson[i].style.backgroundColor = fieldColor;
            elQType[i].style.backgroundColor = fieldColor;
            elDetail[i].style.backgroundColor = fieldColor;
            elLimitDay[i].style.backgroundColor = fieldColor;
        }
    };
})();
