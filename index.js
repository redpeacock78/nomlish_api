const nomlish = require("nomlish");
const express = require("express");

const app = express();
const port = 3000;

app.listen(port);

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

//稼働状況
app.get("/api/ping", (req, res) => {
  const status = {
    "status": "OK"
  };
  res.status(200).json(status);
});

//翻訳
app.post("/api/translate", (req, res) => {
  let level;
  if (!req.body.level) {
    level = 2;
  } else if (typeof req.body.level !== 'number') {
    level = 2;
  } else {
    level = req.body.level;
  }
  const beforText = req.body.text;
  nomlish.translate(beforText, level).then((result) => {
    let response;
    if (result) {
      //正常
      response = {
        "status": 0,
        "level": level,
        "result": result
      };
    } else {
      //翻訳不能
      response = {
        "status": 1
      };
    }
    res.status(200).json(response);
  }).catch(() => {
    //サーバーエラー
    const response = {
      "status": 100
    };
    res.status(500).json(response);
  });
});
