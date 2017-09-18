const request = require('request');
const phantom = require('phantom');
const cheerio = require('cheerio');
const { CronJob } = require('cron');

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

  console.log('create!');
  // 5분에 한번씩 작업
  return new CronJob({
    cronTime: '*5 * * * *',
    onTick: function() {
      worker(data, this);
    },
    start: true,
    timeZone: 'Asia/Seoul'
  });

};

const CGV_URL = 'http://m.cgv.co.kr/Schedule';

async function worker (data, job) {

  console.log('worker!');

  // 1. 현재 기준으로 오픈된 영화 상영 날짜 리스트 얻어오기
  const dateList = await getTicketOpenDate();

  // 2. 날짜별로 입력받은 영화 검색
  checkMoveByDate({dateList, data, job});

};


// 해당 페이지를 얻어오기 위한 selector와 instance를 얻어옴.
async function getPage(url) {

  const instance = await phantom.create(['--ignore-ssl-errors=yes', '--load-images=no']);
  const page     = await instance.createPage();
  const status   = await page.open(url);
  const content  = await page.property('content');

  return {
    '$' : cheerio.load(content),
    instance
  };
}

async function getTicketOpenDate() {
  console.log('getTicketOpenDate!');

  const { $ , instance }  = await getPage(CGV_URL);

  let dateList = [];

  $('.date').each(function() {
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

    const { $ , instance }  = await getPage(url);

     const $movieTime = $('.movieTime');

     let isMatchMovie = false;

     $movieTime.each(function() {

      let movieTitle = $(this).find(".tit").text().trim();

      // console.log('movieTitle', movieTitle);
      // console.log('data.movie_name', data.movie_name);
      
      if (movieTitle == data.title) {
        console.log(`${date}에 ${data.title}이 개봉! 종료합니다.`);

        job.stop();
        hook.send({date, movie_name: data.movie_name});
        isMatchMovie = true;
      }

     });

     if (isMatchMovie) break;

    await instance.exit();

  }
};