const PBot = require('./index');

(async ()=>{
    let pBot = new PBot('Mr. Potato','en');
    await pBot.init();

    console.log(await pBot.say('Hi'));
    console.log(await pBot.say('How are you?'));

    await pBot.destroy();
})();