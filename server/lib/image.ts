import jimp from "jimp";
import sizeOf from 'image-size';
import { base64ToBuffer } from "../utils/base64";

// const x = 0;
// const y = 0;

export function scaleImageSize(data: string | Buffer) {
  let { width = 1, height = 1 } = sizeOf(data);

  const imageRatio = width / height;
  const maxImageSize = 1024;
  if (imageRatio > 1) {
    width = Math.min(maxImageSize, width);
    height = width / imageRatio;
  } else {
    height = Math.min(maxImageSize, height);
    width = height * imageRatio;
  }

  return {
    width, height,
  }
}

export async function resize(imageBuffer: Buffer, mimeType: string) {
  const { width: originWidth = 1, height: originHeight = 1 } = sizeOf(imageBuffer);
  const { width = 1, height = 1 } = scaleImageSize(imageBuffer);

  if (originWidth === width && originHeight === height) {
    return imageBuffer;
  }

  const image = await jimp.read(imageBuffer);

  // Resize the image to width 150 and auto height.
  image.resize(width, height);

  return await image.getBufferAsync(mimeType);
}

export async function watermark(baseImgBase64: string, watermarkImgBase64: string) {
  const imgBuffer = base64ToBuffer(baseImgBase64);
  const parrotBuffer = base64ToBuffer(watermarkImgBase64);
  const image = await jimp.read(imgBuffer);
  const parrot = await jimp.read(parrotBuffer);
  const { height: imgHeight = 1 } = sizeOf(imgBuffer);

  const resizeHeight = imgHeight * 0.25;

  const resizeImage = parrot.resize(jimp.AUTO, resizeHeight);

  image.blit(resizeImage, 10, imgHeight - resizeHeight);

  return await image.getBase64Async(jimp.AUTO);

}

// main();
