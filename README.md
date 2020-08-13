# mute-for-twitch
Console application that will mute the host's mic for a certain amount of time based on how much money they receive from their Twitch stream. Features support for Bits, Subs, and Gift Subs, customizable keybinds, and stacking durations.
# Usage
1. Download and unzip files.
2. Install [node.js](https://nodejs.org/en/) and npm. (npm should be preinstalled from node.js.)
3. Open Command Prompt as Administrator, navigate to the folder you unzipped the files to with [cd](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/cd), and type the following commands:
  - npm i tmi.js
  - npm i --global --production windows-build-tools
4. Open a non-admin Command Prompt window and type "npm i robotjs".
5. Open mutehost.js in a text editor and make the following edits:
  - Change the username on line 14 to the account you're using for the bot.
  - Change the password on line 16 to your oauth token from [this link](https://twitchapps.com/tmi/).
  - Change the channels on line 19 to the channel name that the bot will be in chat on.
  - (Optional) Change the multipliers from lines 7-9 to your desired value. These values are how many seconds a specific action will mute you for.
  
Your text should look something like this: ![Demo](https://cdn.discordapp.com/attachments/603730493074046978/743521744127787088/uh_uh_ye.png)
6. Navigate to the folder you unzipped the files to and type "node mutehost.js".
Congrats! The bot is now up and running. You'll have to do Step 6 every time you want to have the bot go online.
