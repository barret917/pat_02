import { useState } from 'react';
import Modal from "./components/Modal";
import Button from "./components/Button";
import "./App.css";


export default function App() {
  const [open, setOpen] = useState(false);
  const hundleChange=()=>{
    setOpen(false)
  }

  return (
    <div className="App">
      <Button onClick={() => setOpen(true)} />
      {open && <Modal onClick={hundleChange} />}
    </div>
  );
}