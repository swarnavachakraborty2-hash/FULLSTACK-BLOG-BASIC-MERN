const {ImageKit} = require('@imagekit/nodejs');

// IMAGEKIT SETUP
const client = new ImageKit({
    privateKey: process.env.IMAGE_KIT_PRIVATE_KEY
}); 

//uploading image to imagekit
async function uploadFile(buffer) {            
    const response = await client.files.upload({ 
         //file is expected to be of  string format
        file: buffer.toString("base64"), //the file is stored in memory(RAM) buffer in binary format so we have to convert it into string
        fileName: "image.jpg"
     }); // this will return a file metadata with its url in an object
  
    return response        
}



module.exports = uploadFile