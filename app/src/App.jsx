import { Button, Input, Label } from "ui";
import "./App.css";

function App() {
  return (
    <>
      <Label>Imported from UI lib</Label>
      <Input placeholder="From the UI component library" />
      <Button onClick={() => alert("Okay")}>Hello</Button>
    </>
  );
}

export default App;
