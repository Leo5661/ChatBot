function BotAvatar() {
  return (
    <div className="bot_avatar_container mr-3 flex h-9 w-9 items-center justify-center rounded-full bg-gray-300">
      <img
        className="bot_avatar h-4 w-4"
        src="/chatbot.png"
        alt="ChatBot Avatar"
      />
    </div>
  );
}

export default BotAvatar;
