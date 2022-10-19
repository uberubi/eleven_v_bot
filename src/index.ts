import { generateRandomNumber } from "./utils/generateRandomNumber";
import tgAPI from "node-telegram-bot-api";
import { COMMANDS } from "./constants/commands";
import { SUITS } from "./constants/suits";

console.log('APP STARTED')
const token = "5732846403:AAGlCzP9oqtjM9ntjXmqqcd8Ls9YxcO66KY";

const bot = new tgAPI(token, { polling: true });
bot.on("message", (msg) => {
  const { text, chat } = msg;
  if (text === COMMANDS.HELP) {
    bot.sendMessage(
      chat.id,
      "Братишка, напиши команду /roll, что бы люди узнали как к тебе обращаться!"
    );
  }
  if (text === COMMANDS.ROLL) {
    bot.sendMessage(chat.id, SUITS[generateRandomNumber(0, SUITS.length - 1)]);
  }
});
