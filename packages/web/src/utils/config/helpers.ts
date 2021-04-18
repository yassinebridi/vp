import { CLOUDINARY_NAME } from "@vp/common";
import * as dayjs from "dayjs";

export const capitalize = (text: string) => {
  let wordsArray = text.toLowerCase().split(" ");

  let capsArray = wordsArray.map((word) => {
    return word.replace(word[0], word[0].toUpperCase());
  });

  return capsArray.join(" ");
};

export const toDateTime = (secs: string) => {
  var t = new Date(1970, 0, 1); // Epoch
  t.setSeconds(parseInt(secs));
  return t;
};

export const dotify = (text: string, maxLimit: number) => {
  if (text.length > maxLimit) {
    return text.substring(0, maxLimit - 3) + "...";
  }
  return text;
};

export const getIds = (data: any) => {
  const ids: string[] = [];
  data.map((entity) => ids.push(entity.id));
  return ids;
};

export const getCloudinaryImageUrl = (cldPublicName: string) => {
  return `https://res.cloudinary.com/${CLOUDINARY_NAME}/image/upload/q_80/${cldPublicName}`;
};

export const getCloudinaryAudioUrl = (cldPublicName: string) => {
  return `https://res.cloudinary.com/${CLOUDINARY_NAME}/video/upload/${cldPublicName}`;
};

export const removeItem = <T>(arr: T[], item: T) => {
  return arr.filter((f) => f !== item);
};

export const formatDate = (date: Date) => {
  return dayjs(date, { locale: "fr" }).format("DD MMM HH:mm");
};
