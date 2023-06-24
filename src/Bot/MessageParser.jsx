import React from "react";

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    const lowercase = message.toLowerCase();

    if (lowercase.includes("got it")) {
      actions.handelGreet();
    }

    if (lowercase.includes("cancel")) {
      actions.handelCancel();
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
