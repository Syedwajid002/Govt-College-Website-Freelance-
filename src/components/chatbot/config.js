import { createChatBotMessage } from 'react-chatbot-kit';
import { Avatar } from './Avatar';
import { Widget } from './Widget';

const config = {
  initialMessages: [createChatBotMessage(`Hello Namaste Greeting From MJPT DIGITAL ASSISTANT You can directly ask question or select below button to view all categories Categories are : `,{
    widget:'initial'
  })],
  botName:"MJPT DIGITAL ASSISTANT",
  customComponents:{
    botAvatar:(props)=><Avatar {...props}/>
  },
  widgets:[
    {
      widgetName:'initial',
      widgetFunc:(props) => <Widget {...props}/>
    }
  ]
};

export default config;