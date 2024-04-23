export function subImgName(item:any) {
    if(item) {
        let imgSecond = item.substring(item.lastIndexOf("/")+1,item.length);
        let imgSplit = imgSecond.split(".");
        let imgName = imgSplit[0];
        let imgType = imgSplit[1];
        return imgName + "." + imgType;
    } else {
        return "";
    }

}

export function subImgName2(item:any) {
  if(item) {
      let imgSecond = item.substring(item.lastIndexOf("/")+1,item.length);
      let imgSplit = imgSecond.split(".");
      let imgName = imgSplit[0];
      let imgType = imgSplit[1];
      return imgName;
  } else {
      return "";
  }

}

export function oneToTwoArray(arr: any,key:any) {
    let list = arr,
    flag = 0,
    data = [];
  for (let i = 0; i < list.length; i++) {
    let az = "";
    for (let j = 0; j < data.length; j++) {
      if (data[j][0][key] == list[i][key]) {
        flag = 1;
        az = j;
        break;
      }
    }
    if (flag == 1) {
      data[az].push(list[i]);
      flag = 0;
    } else if (flag == 0) {
      let wdy = new Array();
      wdy.push(list[i]);
      data.push(wdy);
    }
  }
  return data;
}

export function splitTime(startTime,endTime) {
  let timeDiff = endTime - startTime; // 相差的毫秒数
  let days = Math.floor(timeDiff / (1000 * 3600 * 24)); // 天数
  let hours = Math.floor((timeDiff % (1000 * 3600 * 24)) / (1000 * 3600)); // 小时数
  let minutes = Math.floor((timeDiff % (1000 * 3600)) / (1000 * 60)); // 分钟数
  let seconds = Math.floor((timeDiff % (1000 * 60)) / 1000); // 秒数
  let timeStr = "";
  if(days > 0) {
    timeStr = timeStr + days + "天";
  }
  if(hours > 0) {
    timeStr = timeStr + hours + "时";
  }
  if(minutes > 0) {
    timeStr = timeStr + minutes + "分";
  }
  if(seconds > 0) {
    timeStr = timeStr + seconds + "秒";
  }

  return timeStr;
}