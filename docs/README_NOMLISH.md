# Nomlish API
![LOGO](https://i.imgur.com/AEPFCkb.png)  
ノムティス公用語翻訳のAPIヴァリアント  
それは、この物語を紐解けばわかるかもしれない…

## 使い方…現れよ、黒薔薇の龍…！
- ### 使役（スレイヴ）例
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
  - #### 戦闘兵器としての完成度
    `GET`: https://www.nomlish.tk/api/ping
    - レムスポン＝ス  
      - `Responses Schema`: `application/json`
      - `実験体《サンプル》`  
        ```json
        {
          "status": "OK"
        }
        ```
      - `戦闘兵器としての完成度`  
        ```console
        200 幻想世界がアクティベートしている、そしてそれを追って降り立ったのがしんりゅうである…エナがチャンガしている状態
         └ status: コントローラの使い方ステータスを表示
                   クリスタルは、ただ静かに光をたたえていた。
        ```
        ```console
        500 サーバーが冥界へ幽閉して囚われているモード
        ```
  - #### 神の創造せしバベル【混乱】をも克服する力を以て
    `POST`: https://www.nomlish.tk/api/translate
    - 偽りの代償ロード・オブ・  
      - `Content-Type`: `application/json`
      - `Data`  
        ```json
        {
          "level": 2, //If not specified, the level will be automatically set to 2
          "text": "任意の文字列"
        }
        ```
    - レムスポン・ス・エクスカリバーゼロカスタム  
      - `Responses Schema`: `application/json`
      - `抽出されし「もの」`  
        ```json
        {
          "status": 0,
          "level": 2,
          "result": "任意の文字列、第三勢力はグルガン族だ。"
        }
        ```
      - `戦闘兵器としての完成度`  
        ```console
        200 ミッションコンプリート
         ├ status: 処理因果律の戦闘兵器としての完成度
         │         ・Ｒｅ：ｕｎｄｅｒｓｔａｎｄが清浄ークリアーに執行しれたオプティマはグラウンド・ゼロ
         │         ・トランスが人知の及ぶところではないなオプティマ（…これが帝国の……POSTされた神代文字が短、あなたは優しすぎる等)はヴェルサス－１
         ├ level:  翻訳に使役（スレイヴ）されたロード・オヴ・ヴェテルギウス
         │         レベル１で最初のボスに挑んだ既定（…これが帝国の……たまねぎ剣士刻印だった因果律の一篇”の威力（レベル）は弐です。
         │         ・1: 日→野 Lv1
         │         ・2: 日→野 Lv2
         │         ・3: 日→野 Lv3
         │         ・4: 日→野 Lv4
         │         ・5: 日→ラグーン語
         │         ※破滅《リザルタ》の戦闘兵器としての完成度がカイーナと陌（トゥヴェラ）の因果律の一篇はデルタアタックされ…それが、俺の答えん。
         └ result: 翻訳結果
                   ※魔滅世界の均衡のステータスが世界に唯一存在することを許されたと陌（トゥヴェラ）のオプティマは奪還作戦されと、切に願うん。
        ```
        ```console
        500 パラダイスロスト
         └ status: 処理因果律の戦闘兵器としての完成度
                   ・何らかの運命に拒絶された（シュウ先輩の息子か？既知への変換行為を行動する、その先に何かがあると信じて神の与えし“特異点”の贄の羊（…これが帝国の……http://racing-lagoon.infoがフォーリンダウン)ている…しかし、その裏では、かつて自分を裏切った兄が、暗躍していたのだ…等…噂には聞いていたが、これ程とはな……）が顕現した因果律の一篇は佰
                   ※API幻想世界がガルバディア兵に殴られて落ちていやがるオプティマは奪還作戦されだと、そう言ったのが聞こえんのかん。
        ```
- ### スティートゥス・ス記録せし大いなる版（アーカイブ）
  https://status.nomlish.tk

## ライセンス
“竜王”の預言書の事実聖鎖はMITキング・オブ・ライセンス、またの名をルシュです。

## 謝辞
- [nomlish](https://github.com/Ancient-Scapes/nomlish)
- [Nomlish Translate Site](http://racing-lagoon.info/)