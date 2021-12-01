function fn(weatherData, lifeData, content, imgurl, lovingDays) {
  const { daily: weatherDataDaily } = weatherData;
  const { daily } = lifeData;

  return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style type="text/css">
			*{
			  margin: 0;
			  padding: 0;
			}
			body,html {
			  width: 100%;
			  height: 100%;
			  overflow: hidden;
			  font-size: 10px;
			}
			.container{
			  width: 100%;
			  height: 100%;
			  overflow-y: scroll;
			  box-sizing: border-box;
			  background: rgba(255,102,102,.5);
			}
			.title {
			  font-size: 2rem;
			  font-weight: bold;
			  line-height: 2;
			  padding: 1rem;
			  margin: 1rem;
			  border-radius: 1rem 0.5rem;
			  text-align: center;
			  /*background: rgba(255,255,153, 0.5);*/
			  position: relative;
			  /*color: #009999;*/
			  /*background-image: linear-gradient(45deg, rgba(255,204,153, 0.3), #ffffff, rgba(255,255,153, 0.5));*/
			  color: #ffffff;
			  margin-bottom: 1.5rem;
			  letter-spacing: 0.2rem;
			}
			.title p:last-child {
			  font-size: 1.4rem;
			}
			.title p:first-child {
			  font-size: 1.6rem;
			}
			.image {
			  width: 100%;
			  max-height: 35rem;
			  overflow: hidden;
			  padding: 0 1rem;
			  box-sizing: border-box;
			  border-radius: 0.6rem;
			  position: relative;
			  display: flex;
			  justify-content: center;
			  align-items: center;
			  padding-bottom: 3.4rem;
			}
			.image img {
			  display: block;
			  height: calc(100% - 5rem);
			  margin: 0 auto;
			  -webkit-mask: url("image/heart.png") no-repeat center/auto 125%;
			}
			.image div {
			  font-size: 1.6rem;
			  text-align: center;
			  line-height: 3.4rem;
			  color: #ffffff;
			  position: absolute;
			  bottom: 0;
			  z-index: 1;
			}
			.image div::before {
			  content: '';
			  display: block;
			  width: 100%;
			  height: 0.2rem;
			  background: #ffffff;
			  position: absolute;
			  bottom: 0;
			  left: 50%;
			  border-radius: 0.2rem;
			  transform: translateX(-50%);
			}
			.content-red {
			  font-size: 1.6rem;
			  text-indent: 2em;
			  font-style: italic;
			  color: #ffffff;
			  text-align:center;
			  padding: 1.5rem 1rem;
			}
			.weather {
			  font-size: 1.4rem;
			  padding: 1.2rem 1rem;
			}
			.today {
			  font-weight: bold;
			  margin-bottom: 1.5rem;
			  position: relative;
			  padding-left: 2.5rem;
			  line-height: 2.4rem;
			  color: #ffffff;
			}
			.today::before {
			  content: '';
			  display: block;
			  position: absolute;
			  width: 2.4rem;
			  height: 2.4rem;
			  left: 0;
			  top: 0;
			  background: url("image/weather.png") no-repeat center/cover;
			}
			.dress::before {
			  content: '';
			  display: block;
			  position: absolute;
			  width: 2.4rem;
			  height: 2.4rem;
			  left: 0;
			  top: 0;
			  background: url("image/dress.png") no-repeat center/cover;
			}
			.cold::before {
			  content: '';
			  display: block;
			  position: absolute;
			  width: 2.4rem;
			  height: 2.4rem;
			  left: 0;
			  top: 0;
			  background: url("image/cold.png") no-repeat center/cover;
			}
			.motion::before {
			  content: '';
			  display: block;
			  position: absolute;
			  width: 2.4rem;
			  height: 2.4rem;
			  left: 0;
			  top: 0;
			  background: url("image/motion.png") no-repeat center/cover;
			}
			.list {
			  line-height: 1.5;
			  border: 0.2rem dashed #ffffff;
			  padding: 1.5rem;
			  border-radius: 2rem 0 2rem 0;
			  list-style: none;
			}
			.list li {
			  margin-bottom: 1rem;
			  color: #ffffff;
			  position: relative;
			  line-height: 2.4rem;
			  padding-left: 2.4rem;
			}
			li:last-child {
			  margin-bottom: 0;
			}
		</style>
      </head>
      <body>
      <div class="container">
        <!-- 天数 -->
        <div class="title">
          <!-- <p>今天是在一起的第${lovingDays}天！</p>-->
          <p>今天是想你的第${lovingDays}天！</p>
        </div>
        <!-- 图片 -->
        <div class="image">
          <img style="width: 100%; max-width: 768px" src="${imgurl}" alt="图片"/>
          <div>今天也要开开心心，元气满满哦(*￣︶￣)！</div>
        </div>
        <!-- 每日一句 -->
        <div class="content-red">
          ${content}
        </div>
        <!-- 天气 -->
        <div class="weather">
          <div class="today">厦门今日气温:${weatherDataDaily[0].tempMin}°C - ${weatherDataDaily[0].tempMax}°C</div>
          <ul class="list">
            <li class="dress">
              ${daily[1].name}(${daily[1].category}):
              ${daily[1].text}
            </li>
            <li class="cold">
              ${daily[2].name}(${daily[2].category}):
              ${daily[2].text}
            </li>
            <li class="motion">
              ${daily[0].name}(${daily[0].category}):
              ${daily[0].text}
            </li>
          </ul>
        </div>
      </div>
      </body>
    </html>
  `;
}

module.exports = fn;
