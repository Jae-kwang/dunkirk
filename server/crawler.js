const request = require('request');
const phantom = require('phantom');
const cheerio = require('cheerio');
const CronJob = require('cron').CronJob;

const hook = require('./hook');

String.prototype.changeDateFormat = function() {
  const currentDate = new Date();
  const y = currentDate.getFullYear();
  const inputDate = new Date(this);
  const m = ("0" + (inputDate.getMonth() + 1)).slice(-2);
  const d = ("0" + (inputDate.getDate())).slice(-2);
  return `${y}${m}${d}`;
};

exports.create = (data) => {

  return new CronJob({
    cronTime: '*5 * * * *',
    onTick: function() {
      worker(data, this);
    },
    start: true,
    timeZone: 'Asia/Seoul'
  });

};

async function worker (data, job) {

  // 1. 오픈된 날짜 리스트 얻어오기
  const dateList = await getTicketOpenDate();

  // 2. 날짜별로 입력받은 영화 검색
  checkMoveByDate({dateList, data, job});

};

async function getTicketOpenDate() {
  const url = 'http://m.cgv.co.kr/Schedule/?tc=0013';

  const instance = await phantom.create(['--ignore-ssl-errors=yes', '--load-images=no']);
  const page     = await instance.createPage();
  const status   = await page.open(url);
  const content  = await page.property('content');

  const $ = cheerio.load(content);

  const $dateList = $('.date');

  let dateList = [];

  $dateList.each(function() {
    dateList.push($(this).text().trim().changeDateFormat());
  });

  await instance.exit();

  return dateList.reduce(function(a,b) {
    if (a.indexOf(b) < 0) a.push(b);
    return a;
  },[]);
};


async function checkMoveByDate(info) {

  const {dateList, data, job} = info;

  console.log('info', info);
  
  for (let date of dateList) {

    console.log('date', date);
    const url = 'http://m.cgv.co.kr/Schedule/?tc=0013&ymd=' + date;

    const instance = await phantom.create(['--ignore-ssl-errors=yes', '--load-images=no']);
    const page     = await instance.createPage();
    const status   = await page.open(url);
    const content  = await page.property('content');

    const $ = cheerio.load(content);

     const $movieTime = $('.movieTime');

     let isMatchMovie = false;

     $movieTime.each(function() {

      let movieTitle = $(this).find(".tit").text().trim();

      console.log('movieTitle', movieTitle);
      console.log('data.movie_name', data.movie_name);
      
      if (movieTitle == data.movie_name) {
        console.log(`${date}에 ${data.movie_name}이 개봉! 종료합니다.`);

        job.stop();
        hook.send({date, movie_name: data.movie_name});
        isMatchMovie = true;
      }

     });

     if (isMatchMovie) break;

    await instance.exit();

  }
};