# Sample Hackathon Bot.
So for this Hackathon we will be using the MSFT Bot Framework. 

## To get started.
Install:
https://ngrok.com/ (optional - only if you want to host the bot locally and have slack connect to it)
 
Click the auto os detection for Bot Framework Emulator http://emulator.botframework.com/
 
If the above doesn’t work try below

Bot Framework Emulator (MAC)
https://github.com/Microsoft/BotFramework-Emulator/releases/download/v3.5.29/botframework-emulator-3.5.29-mac.zip

Bot Framework Emulator (Windows)
https://github.com/Microsoft/BotFramework-Emulator/releases/download/v3.5.29/botframework-emulator-Setup-3.5.29.exe
 
### CLI Steps

$> brew install nodejs
 
$> git clone https://github.com/nma/mhacks-prep-bot

$> npm install -g yarn
 
$> yarn install
 
$> yarn start

$> yarn watch # if you want the server to auto restart on change
 
 
## Run/Debug/Test
 
Search for the header ‘Connect to a bot that is running on localhost’ on the following page.
https://docs.microsoft.com/en-us/bot-framework/debug-bots-emulator
 
And you should be able to start working on the bot!
 
## Design and Docs

Review the funny documentation for bad bots:
https://docs.microsoft.com/en-us/bot-framework/bot-design-navigation
