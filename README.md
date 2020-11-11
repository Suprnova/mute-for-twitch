# mute-for-twitch
A console application that will mute the host's mic for a certain amount of time based on how much money they receive from their Twitch stream. Features support for Bits, Subs, and Gift Subs, customizable keybinds, and stacking durations.
# Usage
1. Download and unzip files.
2. Install [node.js](https://nodejs.org/en/) and npm. (npm should be preinstalled from node.js.)
3. Open Command Prompt as Administrator, navigate to the folder you unzipped the files to with [cd](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/cd), and type the following commands:
  - npm i tmi.js
  - npm i --global --production windows-build-tools
4. Open a non-admin Command Prompt window and type "npm i robotjs".
5. Open mutehost.js in a text editor and make the following edits:
  - Replace **\<username>**, **\<password>**, and **\<channel(s)>** on lines 3, 4, and 5 with the username of the bot, the OAuth token of the bot from [this link](https://twitchapps.com/tmi/), and each channel that the bot will connect to. (This information is stored in an array, if you want to connect to multiple channels, surround each channel name with **'** and separate each one with ", ".)
  - Replace the values on lines 6, 7, and 8 to your desired values, if preferred.
  - Change the keybinds on line 80 and line 87 to match the keybind used for muting on Discord, OBS, etc.. (The current parameters will use the keybind **CTRL + INSERT**, visit [this link](http://robotjs.io/docs/syntax#keys) for more information on how to properly configure it.
  
Your text should look something like this:
``` node
var user = 'mutenovabot';
var pass = 'oauth:****************';
var channels = ['purple_foundation', 'suprnova', 'itspepperpot'];
var bitMultiplier = 0.5; // 0.5 seconds per bit
var subMultiplier = 125; // 125 seconds per sub
var giftSubMultiplier = 125; // 125 seconds per gift sub

...

	robot.keyToggle('alt', 'down');
	robot.keyTap('g');
	robot.keyToggle('alt', 'up');
	// Keybind is ALT + G
```
6. Navigate to the folder you unzipped the files to in Command Prompt and type "node mutehost.js".

Congrats! The bot is now up and running. You'll have to do Step 6 every time you want to have the bot go online.
