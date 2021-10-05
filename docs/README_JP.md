# Nomlish API
![LOGO](https://i.imgur.com/AEPFCkb.png)  
ノムリッシュ翻訳のAPI版

## 使い方
- ### 使用例
  ```console
  $ curl -s -X POST -H "Content-Type: application/json" \
    -d '{"text":"任意の文字列", "level": 4}' \
    https://www.nomlish.tk/api/translate | jq
  {
    "status": 0,
    "level": 4,
    "result": "エンゼルダスト・任意…なんで俺を賞賛するんだ？のモスジレム・ツ＝オーヴァーロード"
  }
  ```
- ### API
  - #### status
    `GET`: https://www.nomlish.tk/api/ping
    - Responses  
      - `Responses Schema`: `application/json`
      - `サンプル`  
        ```json
        {
          "status": "OK"
        }
        ```
      - `ステータス`  
        ```console
        200 サーバーが稼働している状態
         └ status: 動作状態を表示
        ```
        ```console
        500 サーバーが停止している状態
        ```
  - #### translate
    `POST`: https://www.nomlish.tk/api/translate
    - Payload  
      - `Content-Type`: `application/json`
      - `Data`  
        ```json
        {
          "level": 2, //If not specified, the level will be automatically set to 2
          "text": "任意の文字列"
        }
        ```
    - Responses  
      - `Responses Schema`: `application/json`
      - `サンプル`  
        ```json
        {
          "status": 0,
          "level": 2,
          "result": "任意の文字列、第三勢力はグルガン族だ。"
        }
        ```
      - `ステータス`  
        ```console
        200 成功
         ├ status: 処理結果のステータス
         │         ・翻訳が正常に行われた場合は0
         │         ・翻訳が不可能な場合(POSTされたテキストが短すぎる等)は1
         ├ level:  翻訳に使用されたレベル
         │         既定(未指定だった場合)のレベルは2です。
         │         ・1: 日→野 Lv1
         │         ・2: 日→野 Lv2
         │         ・3: 日→野 Lv3
         │         ・4: 日→野 Lv4
         │         ・5: 日→ラグーン語
         │         ※処理結果のステータスが1と100の場合は返却されません。
         └ result: 翻訳結果
                   ※処理結果のステータスが1と100の場合は返却されません。
        ```
        ```console
        500 失敗
         └ status: 処理結果のステータス
                   ・何らかのエラー(翻訳を行うオリジナルのサイト(http://racing-lagoon.info)が落ちている等)が発生した場合は100
                   ※APIサーバーが落ちている場合は返却されません。
        ```
- ### ステータスページ
  https://status.nomlish.tk

## ライセンス
このソースコードはMITライセンスです。

## 謝辞
- [nomlish](https://github.com/Ancient-Scapes/nomlish)
- [Nomlish Translate Site](http://racing-lagoon.info/)