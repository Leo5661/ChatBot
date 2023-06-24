import React from "react";
import { createClientMessage } from "react-chatbot-kit";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handelGreet = () => {
    const clientMessage = createClientMessage("Got it!", {
      delay: 2000,
    });
    addMessageToState(clientMessage);
    const message = createChatBotMessage("Enter your name.", {
      widget: "nameInput",
    });
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

  const handelInput = (text) => {
    const clientMessage = createClientMessage(text, {
      delay: 1000,
    });
    addMessageToState(clientMessage);

    const message = createChatBotMessage("Enter your age", {
      widget: "ageInput",
    });
    addMessageToState(message);
  };

  const handelAge = (text) => {
    const clientMessage = createClientMessage(text, {
      delay: 5000,
    });
    addMessageToState(clientMessage);

    const message = createChatBotMessage("You are added");
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
            handelInput,
            handelAge,
          },
        });
      })}
    </>
  );
};

export default ActionProvider;
