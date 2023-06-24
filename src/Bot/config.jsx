import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import BotAvatar from "../components/BotAvatar";
import BotOptionButton from "../components/BotOptionButton";
import UserAvatar from "../components/UserAvatar";

const botName = "Student Info Bot";

const config = {
  initialMessages: [
    createChatBotMessage("Hello Welcome to student info system", {
      widget: "greetOptionBtn",
    }),
  ],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: "#4994da",
    },
  },
  customComponents: {
    botAvatar: (props) => <BotAvatar {...props} />,
    userAvatar: (props) => <UserAvatar {...props} />,
  },
  widgets: [
    {
      widgetName: "greetOptionBtn",
      widgetFunc: (props) => <BotOptionButton {...props} />,
    },
  ],
};

export default config;
