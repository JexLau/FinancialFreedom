import crypto from 'crypto';

export const cryptoMd5 = (key, str) => {
  const cryptostr = key + str;
  const md5 = crypto.createHash('md5').update(cryptostr, 'utf8').digest('hex');
  return md5;
}