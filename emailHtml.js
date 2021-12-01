function fn(weatherData, lifeData, content, imgurl, lovingDays) {
  const { daily: weatherDataDaily } = weatherData;
  const { daily } = lifeData;

  return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="emailHtml.css">
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
