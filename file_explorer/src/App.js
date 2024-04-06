import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const[userAuth,setAuth]=useState(false);
  const a = 5;
  const b = "shubahm";
  console.log(a, b);

  useEffect(() => {
    setName((name) => "shubham");
    console.log(name);
  }, []);

  return (
    <div className="App">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <input placeholder="text" type="text" />
    </div>
  );
}

export default App;
