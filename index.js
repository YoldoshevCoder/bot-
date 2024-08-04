const TelegramBot = require('node-telegram-bot-api');
const axios = require('axios');
require("dotenv").config();
const token = process.env.token;
const bot = new TelegramBot(token, { polling: true });
const RandomString = require("randomstring")

const channelId = '@Yoldoshev_Coder';


const BootStrap = () => {
const Obj ={
    reply_markup:{
        inline_keyboard:[
            [
                {
                    text:"1", callback_data:"1"
                },
                {
                    text:"2", callback_data:"2"
                },
                {
                    text:"3", callback_data:"3"
                }
            ],
            [
                {
                    text:"4", callback_data:"4"
                },
                {
                    text:"5", callback_data:"5"
                },
                {
                    text:"6", callback_data:"6"
                }
            ],
            [
                {
                    text:"7", callback_data:"7"
                },
                {
                    text:"8", callback_data:"8"
                },
                {
                    text:"9", callback_data:"9"
                }
            ],
            [
                {
                    text:"0", callback_data:"0"
                }
            ]
        ]
    }
}
}

bot.setMyCommands([
    {
        command:"/start", description: "Botni ishga tushirish"
    },
    {
        command:"/game", description: "Random o'yinini o'ynash"
    },
    {
        command: "/info", description: "Bot haqida ma'lumot"
    },
    {
        command: "/call", description: "Qo'lab-quvatlash xizmati"
    },
    {
        command: "/length",description: "Passwordni uzunligini to'g'irlash"
    },
    {
        command:"/home" ,description:"Asosiy menyuga qaytish"
    }
]);

const menu = {
    reply_markup:{
        keyboard:[
            [
                {
                    text: "Random Password"
                },
                {
                    text: "Random o'yin"
                }
            ]
        ],resize_keyboard:true
    }
};

const Btns = {
    reply_markup:{
        keyboard:[
            [
                {
                    text: "Harfli Password"
                },
                {
                    text: "Sonli Password"
                },
                {
                    text: "Belgili Pasword"
                }
            ],
            [
                
                {
                    text: "Sonli va Belgili Password"
                },
                {
                    text: "Harfli va Belgili Password"
                },
                {
                    text: "Harfli va Sonli Password"
                }
            ],
            [
                {
                    text: "Aralash Password"
                }
            ],
            [
                {
                    text: "Orqaga"
                }
            ]
        ],resize_keyboard:true
    }
}

const BigRandom = RandomString.generate({
    length:1,
    charset: 'numeric'
})

const Obj = {
    reply_markup:{
        inline_keyboard:[
            [
                {
                    text:"1", callback_data:"1"
                },
                {
                    text:"2", callback_data:"2"
                },
                {
                    text:"3", callback_data:"3"
                }
            ],
            [
                {
                    text:"4", callback_data:"4"
                },
                {
                    text:"5", callback_data:"5"
                },
                {
                    text:"6", callback_data:"6"
                }
            ],
            [
                {
                    text:"7", callback_data:"7"
                },
                {
                    text:"8", callback_data:"8"
                },
                {
                    text:"9", callback_data:"9"
                }
            ],
            [
                {
                    text:"0", callback_data:"0"
                }
            ]
        ]
    }
}

bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  const text =msg.text;
  // Foydalanuvchi kanalga obuna bo'lganligini tekshirish
  try {
    const response = await axios.get(`https://api.telegram.org/bot${token}/getChatMember`, {
      params: {
        chat_id: channelId,
        user_id: chatId
      }
    });

    const isMember = response.data.result.status === 'member' || response.data.result.status === 'administrator' || response.data.result.status === 'creator';

    if (isMember) {
        if(text === "/start"){
            bot.sendMessage(chatId, 'Siz kanalga obuna bo\'lgansiz, botdan foydalanishingiz mumkin.',menu);
        }
      // Botning asosiy funksiyalarini bu yerda yozing
    } else {
      bot.sendMessage(chatId, 'Botdan foydalanish uchun kanalga obuna bo\'ling va /start tugmasini bosing: ', {
        reply_markup:{
            inline_keyboard:[
                [
                    {
                        text: "Kanal 1", url:"https://t.me/Yoldoshev_Coder", 
                    }
                ],
                [
                    {
                        text: "Kanal 2",url: "https://www.youtube.com/@Yoldoshev_Coder"
                    }
                ]
            ]
        }
      });
    }
  } catch (error) {
    console.error(error);
    bot.sendMessage(chatId, 'Kanal obunasini tekshirishda xatolik yuz berdi.');
  };

  if(text === '/info'){
    bot.sendMessage(chatId, `Bot "Random " tarzda olingan parollarni sizga chiqarib beradi va Bonus sifatida "Random o'yini" ham qo'shilgan!! :)     Diqqat: "Password" soni 9ta etib belgilangan`)
  };
  if(text === '/call'){
    bot.sendMessage(chatId, `Qo'lab-quvatlash xizmati:  @Botlar_dasturchisi`)
  };
  if(text === 'Random Password'){
    bot.sendMessage(chatId, `Kerakli tugmani tanlang`, Btns)
  };
  if(text === 'Harfli Password'){
    const string = RandomString.generate({
        length: 9,  
        charset: 'alphabetic'
    });
    bot.sendMessage(chatId,`Diqqat!!!!!    Random Parolni biror joyga yozib qo'ying                                      Random Password:      ${string}`)
  };
  if(text === 'Sonli Password'){
    const number = RandomString.generate({
        length:9,
        charset:'numeric',
    });
    bot.sendMessage(chatId, `Diqqat!!!!!    Random Parolni biror joyga yozib qo'ying                                      Random Password:      ${number}` )
  };
  if(text === 'Belgili Pasword'){
    const number = RandomString.generate({
        length:9,
        charset: '!@#$%^&*()+,.?/~][{}|"'
    });
    bot.sendMessage(chatId, `Diqqat!!!!!    Random Parolni biror joyga yozib qo'ying                                      Random Password:      ${number}` )  
  };
  if(text === 'Sonli va Belgili Password'){
    const number = RandomString.generate({
        length:9,
        charset: '1234567890!@#$%^&*()+,.?/~][{}|"'
    });
    bot.sendMessage(chatId, `Diqqat!!!!!    Random Parolni biror joyga yozib qo'ying                                      Random Password:      ${number}` )
  };
  if(text === 'Harfli va Belgili Password'){
    const number = RandomString.generate({
        length:9,
        charset: 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm!@#$%^&*()+,.?/~][{}|"'
    });
    bot.sendMessage(chatId, `Diqqat!!!!!    Random Parolni biror joyga yozib qo'ying                                      Random Password:      ${number}` )
  };
  if(text === 'Harfli va Sonli Password'){
    const number = RandomString.generate({
        length:9,
        charset: '1234567890QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm'
    });
    bot.sendMessage(chatId, `Diqqat!!!!!    Random Parolni biror joyga yozib qo'ying                                      Random Password:      ${number}` )
  };
  if(text ==='Aralash Password'){
    const number = RandomString.generate({
        length:9,
        charset: '1234567890QWERTYUIOPASDFGHJKZXCVBNMqwertyuiopasdfghjklzxcvbnm!@#$%^&*()+,.?/~][{}|"'
    });
    bot.sendMessage(chatId, `Diqqat!!!!!    Random Parolni biror joyga yozib qo'ying                                      Random Password:      ${number}` )
  };
  if(text ===`Random o'yin`){
    bot.sendMessage(chatId,`Kampyuter 0dan 9gacha bo'lgan son o'ladi sonni toping.                      O'yindan chiqish uchun /home comandasidan foydalaning`)
    bot.sendMessage(chatId,`To'g'ri sonni toping`,Obj)
  };
//   Ortga qytish uchun
  if(text === 'Orqaga'){
    bot.sendMessage(chatId, `Asosiy Menyu`,menu)
  };
  if(text === '/home'){
    bot.sendMessage(chatId, `Asosiy Menyu`,menu)
  };
  if(text === '/restart'){
    bot.sendMessage(chatId,`To'g'ri sonni toping`,Obj)
  }
}); 

bot.on('callback_query', (msg)=>{
    const data = msg.data;
    const chatId = msg.message.chat.id;
  
    if(data === BigRandom){
        bot.sendMessage(chatId,`Siz to'gri sonni topdingiz  :)`+`                                                                                                                                                                                                  `+`Siz tanlagan son:  ${data}                                                                                                                Kampyuter tanlagan son: ${BigRandom}                            O'yindan chiqish uchun /home comandasidan foydaaning                   O'yinni qayta boshlash uchun /restart comandasidan foydalaning`,)
    }else{
        bot.sendMessage(chatId,`Siz noto'ri sonni tanladingiz :(                    Siz tanlagan son:  ${data}                                                                            Kampyuter tanlagan son:  ${BigRandom}            O'yindan chiqish uchun /home comandasidan foydalning                O'yinni qayta boshlash uchun /restart comandasidan foydalaning`,)
};

});


BootStrap();


