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

router.post('/ticketing', (req, res) => {

  var data = req.body;

  if (Object.keys(data).length === 0) return;

  // 1. job 생성
  const job = crawler.create(data);

  // 2. job 실행
  job.start();

  return res.send(data);

});


router.post('/save', async (req, res) => {

  // 중복 체크

  var { title, theater } = req.body;

  const item = new CrawlItem({
    title,
    theater
  });

  try {
    await item.save();
  } catch(e) {
    const result = await err();
    res.send(result);
  }

  res.send(item);
});

module.exports = router;