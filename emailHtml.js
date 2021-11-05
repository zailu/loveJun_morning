function fn(weatherData, lifeData, content, imgurl, lovingDays) {
  const { daily: weatherDataDaily } = weatherData;
  const { daily } = lifeData;

  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </head>
    <body>
      <div>
        <!-- 天数 -->
        <div>
          <!-- <p>今天是在一起的第${lovingDays}天！</p>-->
		  <p>今天是想你的第${lovingDays}天！</p>
		  <p>今天也要开开心心，元气满满哦(*￣︶￣)！</p>
        </div>
        <!-- 图片 -->
        <div>
          <img
            style="width: 100%; max-width: 768px"
            src="${imgurl}"
            alt="图片"
          />
        </div>
        <!-- 每日一句 -->
        <div>
          <p style="font-size: 14px; text-indent: 2em; font-style: italic;color: red;font-weight:bold;text-align:center">
            ${content}
          </p>
        </div>
        <!-- 天气 -->
        <div>
          <p>
            <b>今日气温:
            <span>${weatherDataDaily[0].tempMin}°C - ${weatherDataDaily[0].tempMax}°C</span>
			</b>
          </p>
          <ul>
            <li style="margin-bottom: 10px">
              ${daily[1].name}(${daily[1].category}):
              ${daily[1].text}
            </li>
            <li style="margin-bottom: 10px">
              ${daily[2].name}(${daily[2].category}):
              ${daily[2].text}
            </li>
            <li style="margin-bottom: 10px">
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
