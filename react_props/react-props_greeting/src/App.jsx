export default function App() {
  return <Greeting name="Bob the builder" />;
}

function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}
