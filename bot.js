var Botkit = require('botkit');

var Dialog = require('dialog-api/lib/botkit/twilioipm');
var dialog = new Dialog(process.env.DIALOG_API_TOKEN, process.env.DIALOG_BOT_ID);

var controller = Botkit.twilioipmbot();

// Track incoming and outgoing messages
controller.middleware.receive.use(dialog.incomingMiddleware);
controller.middleware.send.use(dialog.outgoingMiddleware);

var bot = controller.spawn({
  TWILIO_IPM_SERVICE_SID: process.env.TWILIO_IPM_SERVICE_SID,
  TWILIO_ACCOUNT_SID: process.env.TWILIO_ACCOUNT_SID,
  TWILIO_API_KEY: process.env.TWILIO_API_KEY,
  TWILIO_API_SECRET: process.env.TWILIO_API_SECRET,
  identity: 'Botkit',
  autojoin: true
});


controller.setupWebserver(process.env.PORT || 3000, function(err, webserver) {
  controller.createWebhookEndpoints(controller.webserver, bot, function() {
    console.log('This bot is online!!!');
  });
});

// user said hello
controller.hears(['hello'], 'message_received', function(bot, message) {
  bot.reply(message, 'Hey there.');
});

controller.hears(['cookies'], 'message_received', function(bot, message) {

  bot.startConversation(message, function(err, convo) {

    convo.say('Did someone say cookies!?!!');
    convo.ask('What is your favorite type of cookie?', function(response, convo) {
      convo.say('Golly, I love ' + response.text + ' too!!!');
      convo.next();
    });
  });
});
