# Nomlish API
![LOGO](https://i.imgur.com/AEPFCkb.png)  
REST API version of Nomlish translation

## Usage
- ### Example
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
    `GET`: https://www.nomlish.tk/api/status
    - Responses  
      - `Responses Schema`: `application/json`
      - `Sample`  
        ```json
        {
          "status": "OK"
        }
        ```
      - `Status`  
        ```console
        200 Server is up and running
         └ status: Indicates operational status
        ```
        ```console
        500 Server is dead
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
      - `Sample`  
        ```json
        {
          "status": 0,
          "level": 2,
          "result": "任意の文字列、第三勢力はグルガン族だ。"
        }
        ```
      - `Status`  
        ```console
        200 Success
         ├ status: Status of the processing result
         │         - 0 if the operation was successful
         │         - 1 when translation is not possible
         ├ level:  Levels used for translation
         │         Default level is 2
         │         - 1: 日→野 Lv1
         │         - 2: 日→野 Lv2
         │         - 3: 日→野 Lv3
         │         - 4: 日→野 Lv4
         │         - 5: 日→ラグーン語
         │         Not returned when status code is 1 and 100
         └ result: Translation results
                   Not returned when status code is 1 and 100
        ```
        ```console
        500 Failure
         └ status: Status of the processing result
                   100 if some error occurs
        ```
- ### Status Page
  https://status.nomlish.tk

## Lisence
This source code is licensed MIT.

## Acknowledgements
- [nomlish](https://github.com/Ancient-Scapes/nomlish)
- [Nomlish Translate Site](http://racing-lagoon.info/)