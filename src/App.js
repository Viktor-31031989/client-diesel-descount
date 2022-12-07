import './App.css';
import Header from "./components/Header";
import Uploader from "./components/Uploader";
import InputBody from "./components/InputBody";

function App() {
  return (
    <div>
      <Header />
      <hr/>
      <Uploader />
      <hr/>
      <InputBody />
    </div>
  );
}

export default App;
