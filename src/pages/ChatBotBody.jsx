import { Chatbot } from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "../Bot/config";
import MessageParser from "../Bot/MessageParser";
import ActionProvider from "../Bot/ActionProvider";

function ChatBotBody() {
  return (
    <div className="chat_bot_screen h-full">
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
}

export default ChatBotBody;
