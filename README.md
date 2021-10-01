# Nomlish API
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
    https://www.nomlish.tk/api/status
    - Responses  
      `Responses Schema: application/json`
      ```console
      200 Server is up and running
       └ status: Indicates operational status
      ```
      ```console
      500 Server is dead
      ```
  - #### translate
    - Responses  
      `Responses Schema: application/json`
      ```console
      200 Success
       ├ status: Status of the processing result
       │         0 if the operation was successful
       │         1 when translation is not possible
       ├ level:  Levels used for translation
       │         Default level is 2
       └ result: Translation results
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