# Get Transcriptions function

This function gets the transcribed text from the result of Transcription Job of Amazon Transcribe.

You can configure the bucket where these operations are going to happen.

This function expects that the input file is called trascribe.json and it is stored in the bucket you define.
The result is stored in the configured S3 bucket with the name transcription.txt.

## Deploy

To deploy this to the cloud use AWS SAM CLI

To configure the deployment:

```
sam deploy --guided
```

Follow the steps and this will deploy this function in that account in the desired region.
When deploying for the first time you need to input the bucket name, make sure that bucket exists before deploying this function.
