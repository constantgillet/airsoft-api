import sharp from 'sharp';
import fs from 'fs';

export const fileNameToJPG = (fileName: string): string => {
    return fileName.replace(/\.[^/.]+$/, '') + '.jpg'
} 

//Resize image
export const resizeImage = async (imageInput: any, imageOut: any) => {

    try {

        await sharp(imageInput)
            .resize(640, 320)
            .toFormat('jpeg')
            .flatten({ background: { r: 255, g: 255, b: 255 } })
            .jpeg({
                quality: 100,
                chromaSubsampling: '4:4:4',
                force: true
            })
            .toFile(fileNameToJPG(imageOut));

            fs.unlinkSync(imageInput);
            return true;

    } catch (error) {
        console.error(error);
        return false;
    }

} 