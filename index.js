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
  const beforText = req.body.text;
  const judgeLevel = () => {
    if (!req.body.level) {
      return 2
    } else if (typeof req.body.level !== 'number') {
      return 2
    } else {
      return req.body.level
    }
  };
  const level = judgeLevel();
  nomlish.translate(beforText, level).then((result) => {
    if (result) {
      //正常
      let response = {
        "status": 0,
        "level": level,
        "result": result
      };
      res.status(200).json(response);
    } else {
      //翻訳不能
      let response = {
        "status": 1
      };
      res.status(200).json(response);
    }
  }).catch(() => {
    //サーバーエラー
    const response = {
      "status": 100
    };
    res.status(500).json(response);
  });
});
