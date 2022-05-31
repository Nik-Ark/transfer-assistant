require('dotenv').config();
const accessSpreadsheet = require('./spread-sheet-connect');
const createBot = require('./bot-init');

/*    Listening uncaught errors    */
/*
process.on('uncaughtException', error => {
  console.log(`\nUnhandled Error occured on the Server\n: ${error.message}`);
  process.exit(1);
  // SHOULD I USE LOGGER ???
});
*/

async (function start() {
  const doc = await accessSpreadsheet();



  const bot = await createBot();

  
})();



// ПРОВЕРИТЬ ЕСТЬ ЛИ ID ПОЛЬЗОВАТЕЛЯ В ТАБЛИЦЕ ВОДИТЕЛЯ ИЛИ ПАССАЖИРА
// ЕСЛИ НЕТ, ЗАПУСТИТЬ В ОТДЕЛЬНОЙ ФУНКЦИИ ОБРАБОТЧИК СОБЫТИЯ ONTEXT
// ОБРАБОТЧИК ИСПОЛЬЗУЕТ REGEXP
// НУЖНО ПОЛУЧИТЬ ИМЯ И ФАМИЛИЮ, ЗАТЕМ ТЕЛЕФОН
// ПОСЛЕ ОБРАБОТЧИК ONTEXT СНЯТЬ И РАБОТАТЬ ТОЛЬКО ON callback_query
