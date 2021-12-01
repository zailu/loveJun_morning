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
      <div style="font-size: 1rem;width: 100%;height: 100%;overflow-y: scroll;box-sizing: border-box;border:1px solid rgba(216, 131, 197, 0.5);">
        <!-- 天数 -->
        <div style="font-weight: bold;line-height: 2;padding: 1rem;margin: 1rem;border-radius: 1rem 0.5rem;text-align: center;position: relative;color: #000000;margin-bottom: 2px;letter-spacing: 0.2rem;">
          <!-- <p>今天是在一起的第${lovingDays}天！</p>-->
          <p>今天是想你的第${lovingDays}天！</p>
		  <div>今天也要开开心心，元气满满哦</div>
		  <div>(*￣︶￣)！</div>
        </div>
        <!-- 图片 -->
        <div style="width: 100%;max-height: 35rem;overflow: hidden;padding: 0 1rem;box-sizing: border-box;border-radius: 0.6rem;position: relative;display: flex;justify-content: center;align-items: center;padding-bottom: 1rem;">
          <img style="width: 100%;"; src="${imgurl}" alt="图片" />
        </div>
        <!-- 每日一句 -->
        <div style="font-size: 1rem;font-family:"微软雅黑" text-indent: 2em;font-style: italic;color: #000000;padding: 1.5px 1px;">
          ${content}
        </div>
        <!-- 天气 -->
        <div style="font-size: 1rem;padding: 1.2rem 1rem;">
          <div style="font-weight: bold;color: #000000;">厦门今日气温:${weatherDataDaily[0].tempMin}°C - ${weatherDataDaily[0].tempMax}°C</div>
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
