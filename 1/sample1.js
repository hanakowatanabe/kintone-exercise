/*
 * ログインユーザーが担当しているレコードに背景色をつけるサンプルプログラム
 * Copyright (c) 2015 Cybozu
 *
 * Licensed under the MIT License
 */
/*jslint nomen: true, devel: true, browser: true, vars: true, plusplus: true*/
/*global 'kintone': false */
(function () {
 
    "use strict";
 
    var LIMIT_DAY = 5; // 期限日
    var LOGIN_COLOR = "#e5f0ff"; // ログインユーザのフィールド色
 
    // レコード一覧の表示時にフィールド値の条件に応じて、文字色とフィールドの背景色を変更する
    kintone.events.on('app.record.index.show', function(event) {
 
        var user = kintone.getLoginUser();         // ログインユーザ情報
        var today = moment().format("YYYY-MM-DD"); // 本日日付フォーマット処理
        // 一覧の要素を取得
        var elCustomer = kintone.app.getFieldElements('Customer');
        var elQType = kintone.app.getFieldElements('QType');
        var elStatus = kintone.app.getFieldElements('Status');
        var elLimitDay = kintone.app.getFieldElements('LimitDay');
        var elPerson = kintone.app.getFieldElements('Person');
        var elDetail = kintone.app.getFieldElements('Detail');
 
        // レコード期限日と担当者チェック処理
        for (var i = 0; i < event.records.length; i++) {
            var record = event.records[i];
 
            // 対応担当者のArrayから担当者名を抽出
            var recperson = record['Person']['value'];
            var personList = [];
            for (var j = 0; j < recperson.length; j++) {
                personList.push(recperson[j].name);
            }
 
            // 担当者チェック
            if (personList.indexOf(user.name) > -1) {
                // 対応担当者がログインユーザの場合はフィールド色を変更する
                if (elCustomer) {elCustomer[i].style.backgroundColor = LOGIN_COLOR; }
                if (elQType) {elQType[i].style.backgroundColor = LOGIN_COLOR; }
                if (elStatus) {elStatus[i].style.backgroundColor = LOGIN_COLOR; }
                if (elLimitDay) {elLimitDay[i].style.backgroundColor = LOGIN_COLOR; }
                if (elPerson) {elPerson[i].style.backgroundColor = LOGIN_COLOR; }
                if (elDetail) {elDetail[i].style.backgroundColor = LOGIN_COLOR; }
            }
 
            // 期限日の取得
            var mt = moment(record['LimitDay']['value']);
            // 未完了レコードの期限日チェック
            if (record['Status']['value'] !== "完了") {
 
                if (!elLimitDay) {continue; }
 
                // 期限切れレコードを赤字にする
                if (mt.format("YYYY-MM-DD") < today) {
                    elLimitDay[i].style.color = 'red';
                    elLimitDay[i].style.fontWeight = 'bold';
 
                // 期限が**日後までのレコードを青字にする
                } else if (mt.add('days', -LIMIT_DAY).format("YYYY-MM-DD") <= today) {
                    elLimitDay[i].style.color = 'blue';
                }
            }
        }
 
        // ログインユーザの未完了で期限切れのレコード数を表示する
        // クエリ文の設定
        var qryInfo = 'Person in (LOGINUSER()) and Status not in ("完了") and LimitDay < TODAY()';
 
        // 非同期リクエストを行う
        kintone.api(kintone.api.url('/k/v1/records', true),
            'GET', {app: kintone.app.getId(), query: qryInfo}, function(resp) {
            if (resp['records'].length > 0) {
                alert("期限が切れている " + user.name + " さんのレコードが " + resp['records'].length + "件あります。");
            }
        });
    });
})();