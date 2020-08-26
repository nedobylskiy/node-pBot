# pBot (p-bot.ru) Node.js API
**Russian language only for now.**

This module mock-ups pBot site (http://p-bot.ru/) with puppeteer and provides simple class for interacting with bot.

For fun only

## Usage
```javascript

//Require module
const PBot = require('./index');

(async ()=>{

    //Create bot instance with new name "Mr. Potato"
    let pBot = new PBot('Mr. Potato');
    
    //Initialize instance
    await pBot.init();

    //Chatting with bot
    console.log(await pBot.say('Hello. My name is Maria')); //Hello. My name is Mr. Potato
    console.log(await pBot.say('How are you?')); //I'm fine

    await pBot.destroy();
})();
```