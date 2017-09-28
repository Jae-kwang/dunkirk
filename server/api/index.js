var express = require('express');
var router = express.Router();

const crawler = require('../crawler');

const CrawlItem = require('../models/crawl_item');

router.get('/list', async (req, res) => {

  let items = '';

  try {
    items = await CrawlItem.find().exec();
    console.log(items);
  } catch (e) {
    console.log("err: ", e);
  }

  res.send(items);

});

router.post('/ticketing', async (req, res) => {

  var data = req.body;

  // check value
  var hasValue = true;
  for (var i in data) {
    if (data[i] === '') {
      hasValue = false;
      break;
    }
  }

  if (!hasValue) return;

  // 1. job 생성
  const job = crawler.create(data);

  // 2. job 실행
  job.start();

  // 3. DB 저장
  const item = new CrawlItem(data);

  try {
    await item.save();
  } catch(e) {
    const result = await err();
    res.send(result);
  }

  return res.send(data);

});

module.exports = router;