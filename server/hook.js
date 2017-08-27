const request = require('request');
const moment  = require('moment');

exports.send = (hookInfo) => {

  const { date, movie_name } = hookInfo;

  moment.locale('ko');

  const days = moment(date).format('MMMM Do dddd');

  const options = {
    uri: 'https://hooks.slack.com/services/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',
    method: 'POST',
    json: {
      "username": "예매 알림",
      "icon_emoji": ":lion:",
      "text": `${days}에 "${movie_name}"이(가) 오픈!`
    }
  };

  request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log('슬렉 Hook 성공!');
    }
  });

};
