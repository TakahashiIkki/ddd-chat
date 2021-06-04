import {ChatApp} from './app/ChatApp';

const chatApp = new ChatApp(process.env);

chatApp.init().then(chatApp.start).catch(chatApp.exitOnError);
