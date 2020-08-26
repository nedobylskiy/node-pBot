const PBot = require('./index');

(async ()=>{
    let pBot = new PBot('Пушистик');
    await pBot.init();

    console.log(await pBot.say('Меня зовут Андрей'));
    console.log(await pBot.say('Чё как дела?'));

    await pBot.destroy();
})();