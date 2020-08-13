/* created by twitch.tv/suprnova, thanks to ItsPepperPot and Pixel-Dog on github for code edits and optimizations. */

const tmi = require('tmi.js');
const robot = require('robotjs');

// Define configuration options
const opts = {
	identity: {
		username: '<username>'
		password: '<oauth token>'
	},
	channels: [
		'<channel>'
	]
};

// Create a client with our options
const client = new tmi.client(opts);
client.on('connected', onConnectedHandler);

// Connect to Twitch:
client.connect();
client.on("cheer", (channel, userstate, message) => {
	//changes between bits and bit when appropriate
	console.log(`cheer received for ${userstate.bits} bit${userstate.bits === 1 ? '' : 's'}`);

	let bitMuteDuration = userstate.bits / 2;

	client.say(channel, `Muting for ${bitMuteDuration} second${bitMuteDuration === 1 ? '' : 's'}`);
	let bitsTime = userstate.bits * 500 // 0.5 seconds per bit
	muteHost(bitsTime);
});

client.on("subscription", (channel, username, method, message, userstate) => {
    console.log(`subscription received`)
	
	let subTime = 125000; // 125 seconds per sub
	
	client.say(channel, `Muting for 125 seconds`);
	muteHost(subTime);
});

client.on("subgift", (channel, username, streakMonths, recipient, methods, userstate) => {
    console.log(`gift subscription received`)
	
	let giftTime = 125000; // 125 seconds per sub
	
	client.say(channel, `Muting for 125 seconds`);
	muteHost(giftTime);
});

client.on("submysterygift", (channel, username, numbOfSubs, methods, userstate) => {
    console.log(`mystery gift subscription received`)
	
	let mGiftTime = 125000; // 125 seconds per sub
	
	client.say(channel, `Muting for 125 seconds`);
	muteHost(mGiftTime);
});

var lastMuteTimeStamp = new Date();
var outstandingMuteTime = 0; //ms
var timer;

function muteHost(time) {
    msSinceLastMute = Math.abs(Date.now() - lastMuteTimeStamp);
    lastMuteTimeStamp = Date.now();

    if (msSinceLastMute < outstandingMuteTime) {
        //outstanding mute time hasn't been run down yet; this means that we need to clear the old timeout and run a new one
        outstandingMuteTime = outstandingMuteTime - msSinceLastMute + time;
        console.log(`mute extended to ${outstandingMuteTime / 1000} seconds`);

        clearTimeout(timer);
    } else {
        //no outstanding mute, start a new timeout and trigger a mute
        outstandingMuteTime = time;

        robot.keyToggle('control', 'down');
        robot.keyTap('home');
        robot.keyToggle('control', 'up');
        console.log(`muted host for ${outstandingMuteTime / 1000} seconds`);
    }

    timer = setTimeout(function () {
        robot.keyToggle('control', 'down');
        robot.keyTap('home');
        robot.keyToggle('control', 'up');
        console.log('unmuted host');
    }, outstandingMuteTime);
}

// Called every time the bot connects to Twitch chat
function onConnectedHandler(addr, port) {
	console.log(`* Connected to ${addr}:${port}`);
}
