import "./App.css";
import Form from "./components/Form";
import HalfRight from "./components/HalfRight";
import HalfLeft from "./components/HalfLeft";

function App() {
  return (
    <>
      <div className="flex h-screen relative">
        <HalfLeft />
        <Form />
        <HalfRight />
      </div>
    </>
  );
}

export default App;
