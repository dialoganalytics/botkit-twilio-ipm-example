# Twilio IP Messaging Botkit Chatbot

An example [Twilio IP Messaging](https://twilio.com) node.js chatbot and integrated with [Dialog Analytics](https://dialoganalytics.com). Built with [howdyai/botkit](https://github.com/howdyai/botkit).

- [Dialog Documention](https://docs.dialoganalytics.com)
- [Dialog API reference](https://docs.dialoganalytics.com/reference)

## Getting started

Clone this repository and run `npm install`

Create an account on https://app.dialoganalytics.com, grab your Dialog API token and bot ID.

Follow [these instructions](https://github.com/howdyai/botkit/blob/master/readme-twilioipm.md) to get started with a Twilio IP Messaging bot.

Set environment variables in `.env`:

```
TWILIO_IPM_SERVICE_SID=...
TWILIO_ACCOUNT_SID=...
TWILIO_API_KEY=...
TWILIO_API_SECRET=...
DIALOG_API_TOKEN=...
DIALOG_BOT_ID=...
```

__Local development:__ When developping locally, use a service like ngrok.com to expose a server running on your machine.

```bash
$ ngrok http 3000
```

Start the bot:

```bash
$ node bot.js https://somesubdomain.ngrok.io
```

Open the Messenger application, find your bot and exchange a few messages. Messages will be sent to Dialog's API.

## Go further

Read more on how to make the most out of the possibilities offered by Dialog here: https://dialoganalytics.com
