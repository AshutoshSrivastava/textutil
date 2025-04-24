import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";

function App() {
  return (
    <>
      <Navbar title={'TextUtils'} aboutUs={'About Us'} />
      <div className="container my-3">
        <TextForm header="Enter your text here" />
      </div>
    </>
  );
}

export default App;
