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

__Local development:__ When developping locally, use a service like https://ngrok.com to expose a server running on your machine.

__Local development:__ When developping locally, use a service like https://ngrok.com to expose a server running on your machine. You'll need to update your [Twilio app's webhook](https://www.twilio.com/console/chat/services) and set it to something like `https://075301e2.ngrok.io/twilio/receive`.

```bash
$ ngrok http 3000
```

Start the bot:

```bash
$ node bot.js https://075301e2.ngrok.io
```

If you don't already have an application to interact with Twilio's API, clone this demo client application: [https://github.com/twilio/twilio-chat-demo-js].

Exchange a few messages with the bot. Messages will be sent to Dialog's API.

## Go further

Read more on how to make the most out of the possibilities offered by Dialog here: https://dialoganalytics.com
