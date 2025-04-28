export default function App() {
  function handleClick() {
    console.log("hey :)");
  }

  return (
    <div>
      <Button text="hello" color="salmon" onClick={handleClick} />
      <Button text="what?" color="rebeccapurple" />
      <Button text="bye" color="lime" isDisabled />
    </div>
  );
}

function Button({ text, color, isDisabled, onClick }) {
  return (
    <button
      style={{ backgroundColor: color }}
      disabled={isDisabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
