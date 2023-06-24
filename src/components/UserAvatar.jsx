function UserAvatar() {
  return (
    <div className="bot_avatar_container ml-3 flex h-9 w-9 items-center justify-center rounded-full bg-gray-300">
      <img className="bot_avatar h-6 w-6" src="/user.png" alt="User Avatar" />
    </div>
  );
}

export default UserAvatar;
