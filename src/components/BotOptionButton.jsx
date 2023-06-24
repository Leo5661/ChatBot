function BotOptionButton(props) {
  const options = [
    {
      text: "Got it",
      handler: props.actions.handelGreet,
      id: 1,
    },
    {
      text: "Cancel",
      handler: props.actions.handelCancel,
      id: 2,
    },
  ];

  const buttons = options.map((option) => (
    <button
      key={option.id}
      className="rounded-md border border-blue-700 bg-transparent px-4 py-2 text-black"
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="flex justify-end gap-2">{buttons}</div>;
}

export default BotOptionButton;
