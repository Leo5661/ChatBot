import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import BotAvatar from "../components/BotAvatar";

const botName = "Student Info Bot";

const config = {
  initialMessages: [
    createChatBotMessage("Hello Welcome to student info system"),
  ],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: "#C6E2FF",
    },
  },
  //   customComponents: {
  //     botAvatar: (props) => <BotAvatar {...props} />,
  //   },
};

export default config;
