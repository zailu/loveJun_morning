const fetch = require('node-fetch');
const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');
const timezone = require('dayjs/plugin/timezone');

const sendEmail = require('./sendEmail');
const emailHtml = require('./emailHtml');

// 给dayjs添加时区选项
dayjs.extend(utc);
dayjs.extend(timezone);

const {
  fromDisplayText,
  fromDisplaySubText,
  user,
  to,
  weatherKey,
  location,
  type,
  tianXingKey,
  startDay,
} = require('./config');

async function init() {
  try {
    // 获取天气信息
    const weatherRes = await fetch(
      `https://devapi.qweather.com/v7/weather/3d?key=${weatherKey}&location=${location}`
    );
    const weatherData = await weatherRes.json();

    // 获取天气生活指数
    const lifeRes = await fetch(
      `https://devapi.qweather.com/v7/indices/1d?key=${weatherKey}&location=${location}&type=${type}`
    );
    const lifeData = await lifeRes.json();

    // 获取one图片
    const oneRes = await fetch(
      `http://api.tianapi.com/txapi/one/index?key=${tianXingKey}`
    );
    const oneData = await oneRes.json();
    const { word, imgurl } = oneData.newslist[0];
	
	//获取文字
	const oneRes2 = await fetch(
      //早安心语
	  //`http://api.tianapi.com/zaoan/index?key=10a0b8b423af1448982e50a6909e0230`
	  //最美宋词
	  `http://api.tianapi.com/zmsc/index?key=10a0b8b423af1448982e50a6909e0230`
	);
    const oneData2 = await oneRes2.json();
    const { content, source } = oneData2.newslist[0];

    // 计算日期
    const lovingDays = dayjs(dayjs().tz('Asia/Shanghai')).diff(
      startDay,
      'days'
    );

    // 用邮件模版生成字符串
    const htmlStr = emailHtml(weatherData, lifeData, content, source, imgurl, lovingDays);

    // 发送邮件;
    sendEmail({
      from: fromDisplayText,
      to,
      subject: fromDisplaySubText,
      html: htmlStr,
    });
  } catch (e) {
    // 发送邮件给自己提示
    sendEmail({
      from: '报错啦',
      to: user,
      subject: '定时邮件-报错提醒',
      html: '请查看github actions',
    });
  }
}

init();
