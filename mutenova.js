const tmi = require('tmi.js');
const robot = require('robotjs');

// Define configuration options
const opts = {
  identity: {
    username: 'mutenovabot',
    password: '<REDACTED>'
  },
  channels: [
    'purple_foundation'
  ]
};
// Create a client with our options
const client = new tmi.client(opts);
client.on('connected', onConnectedHandler);
// Connect to Twitch:
client.connect();
client.on("cheer", (channel, userstate, message) => {
	console.log('cheer received for ' + userstate.bits + ' bits');
	client.say(channel, 'Muting nova for ' + userstate.bits / 2 + ' second(s)');
	muteNova(userstate.bits);
	client.say(channel, 'Finished muting nova for ' +userstate.bits / 2 + ' second(s)');
});
function muteNova (bits) {
	robot.keyToggle('control', 'down');
	robot.keyTap('home');
	robot.keyToggle('control', 'up');
	console.log('muted nova');
	var bitstoseconds = bits * 500;
	setTimeout(function() {
	robot.keyToggle('control', 'down');
	robot.keyTap('home');
	robot.keyToggle('control', 'up');
	console.log('unmuted nova');
	}, bitstoseconds);
	
}
// Called every time the bot connects to Twitch chat
function onConnectedHandler (addr, port) {
  console.log(`* Connected to ${addr}:${port}`);
}