import ImageKit, { toFile } from '@imagekit/nodejs';
import  config  from '../config/config.js';

const client = new ImageKit({
  privateKey: config.IMAGEKIT_PRIVATE_KEY, // This is the default and can be omitted
});

 
export async function uploadFiles( {buffer , fileName}) {

  const response =  await client.files.upload({
  file: await toFile(buffer),
  fileName: fileName ,
});
  
 return response
}

