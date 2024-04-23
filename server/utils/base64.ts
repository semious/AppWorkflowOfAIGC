import fs from 'fs';
import aixos from 'axios';

export function base64FromFile(file: string, ext?: string) {
  // read binary data
  const bitmap = fs.readFileSync(file);
  if (ext) {
    return `data:image/${ext};base64,${Buffer.from(bitmap).toString('base64')}`;
  }
  return Buffer.from(bitmap).toString('base64');
}

export async function base64FromUrl(url: string) {
  const res = await aixos.get(url, {
    responseType: 'arraybuffer',
  });
  const base64 = Buffer.from(res.data, 'binary').toString('base64');
  // console.log('base64 :>> ', base64);
  return base64;
}

export function base64FromBuffer(buffer: Buffer, ext?: string) {
  if (ext) {
    return `data:image/${ext};base64,${buffer.toString('base64')}`;
  } else {
    return buffer.toString('base64');
  }
}

export function base64ToBuffer(data: string) {
  const base64 = data.replace(/^data:image\/\w+;base64,/, ""); //去掉图片base64码前面部分data:image/png;base64
  return Buffer.from(base64, 'base64'); //把base64码转成buffer对象，
}

export function saveBase64Image(data: string, path: string) {
  const base64 = data.replace(/^data:image\/\w+;base64,/, ""); //去掉图片base64码前面部分data:image/png;base64
  // new Buffer 操作权限太大，v6.0后使用Buffer.from()创建构造函数
  const dataBuffer = Buffer.from(base64, 'base64'); //把base64码转成buffer对象，
  fs.writeFileSync(path, dataBuffer)
}
