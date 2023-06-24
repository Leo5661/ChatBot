import React from "react";
import { createClientMessage } from "react-chatbot-kit";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handelGreet = () => {
    const clientMessage = createClientMessage("Got it!", {
      delay: 2000,
    });
    addMessageToState(clientMessage);
    const message = createChatBotMessage("Enter your name.");
    addMessageToState(message);
  };

  const handelCancel = () => {
    const clientMessage = createClientMessage("Cancel", {
      delay: 1000,
    });
    addMessageToState(clientMessage);
    const message = createChatBotMessage(
      "Thanks for visiting, Hope to see you again.",
      {
        delay: 1000,
      }
    );
    addMessageToState(message);
  };

  const addMessageToState = (message) => {
    setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };

  return (
    <>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handelGreet,
            handelCancel,
          },
        });
      })}
    </>
  );
};

export default ActionProvider;
