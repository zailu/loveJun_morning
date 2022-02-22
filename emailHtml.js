function fn(weatherData, lifeData, content, source, author, imgurl, lovingDays) {
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
          <p>今天已经是相识的第${lovingDays}天啦</p>
		  <div>今天也要开开心心，元气满满哦</div>
		  <!-- <img  style="width: 50%;"; src="https://s3.bmp.ovh/imgs/2021/12/c78f040792460398.png" /> 爱心-->
		  <img  style="width: 50%;"; src="https://s3.bmp.ovh/imgs/2022/02/740c380849b7e962.png" />
        </div>
        <!-- 图片 -->
        <div style="width: 100%;max-height: 35rem;overflow: hidden;padding: 0 1rem;box-sizing: border-box;border-radius: 0.6rem;position: relative;display: flex;justify-content: center;align-items: center;padding-bottom: 1rem;">
          <img style="width: 100%;"; src="${imgurl}" alt="图片" />
        </div>
        <!-- 每日一句 -->
        <div style="font-size: 1rem;text-indent: 2em;font-style: italic;padding: 3rem 2rem;background: url(https://s3.bmp.ovh/imgs/2021/12/b8b68c4a645b0f91.png) no-repeat center top;background-size: 90% 100%;">
			<!-- https://s3.bmp.ovh/imgs/2021/12/b8b68c4a645b0f91.png    云朵-->
			<div style="padding: 2rem 2rem;font-family: "仿宋";color: #FFFFFF;">
				 ${content}
				<div style="font-size: 0.8rem;float:right;padding: 1rem 1rem;">
				 	 ——${author}<<${source}>>
				 </div>
			</div>
        </div>

        <!-- 天气 -->
        <div style="font-size: 1rem;padding: 1.2rem 1rem;">
			<div style="font-weight: bold;color: #000000;padding: 1rem 1rem;">
				<img style="width: 10%;"; src="https://s3.bmp.ovh/imgs/2021/12/5a70dee63635fcdc.png" />
				惠州今日气温:${weatherDataDaily[0].tempMin}°C - ${weatherDataDaily[0].tempMax}°C
			</div>
			<div style="font-size: 1rem;float:right;padding: 1rem 1rem;">
				<div style="padding-bottom: 1rem;">
					<img style="width: 6%;"; src="https://s3.bmp.ovh/imgs/2021/12/f4e0eace95359e80.png" />
					${daily[1].name}(${daily[1].category}):
					${daily[1].text}
				</div>
				<div style="padding-bottom: 1rem;">
					<img style="width: 6%;"; src="https://s3.bmp.ovh/imgs/2021/12/678c04dd55d73f81.png" />
					${daily[2].name}(${daily[2].category}):
					${daily[2].text}
				</div>
				<div style="padding-bottom: 1rem;">
					<img style="width: 6%;"; src="https://s3.bmp.ovh/imgs/2021/12/f63a46c72a12aca3.png" />
					${daily[0].name}(${daily[0].category}):
					${daily[0].text}
				</div>
           </div>
        </div>
      </div>
      </body>
    </html>
  `;
}

module.exports = fn;
