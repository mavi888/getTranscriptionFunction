const AWS = require("aws-sdk");
const s3 = new AWS.S3();

const BUCKETNAME = process.env.BUCKETNAME

exports.handler = async (event, context) => {

    console.log("get transcribed object and save it in a new file");
    console.log(event);

    const key = 'trascribe.json';
    const file = await getObject(key);

    console.log(file.results.transcripts[0]);

    const transcript = file.results.transcripts[0].transcript;
    console.log(transcript);

    
    const data = await putObject(transcript);
    console.log(data);
  
    return;
};
  
async function putObject(body) {
    console.log('put object');

    const params = {
        Bucket: BUCKETNAME,
        Body: body,
        Key: 'transcribed.txt'
    };

    console.log(params)

    return s3.putObject(params).promise().then((data) => {
        return data;
    });
};


function getObject(key) {
    console.log('get object');

    const params = {
        Bucket: BUCKETNAME,
        Key: key,
        ResponseContentType: 'text/json'
    }

    console.log(params);

    return s3.getObject(params).promise().then((file) => {
        const objectData = file.Body.toString('utf-8'); // Use the encoding necessary
        const jsonData = JSON.parse(objectData);
        return jsonData;
    })
  }