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
      className="rounded border border-blue-700 bg-transparent px-3 py-1 text-base text-gray-700"
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="flex justify-end gap-2">{buttons}</div>;
}

export default BotOptionButton;
