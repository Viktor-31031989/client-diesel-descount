import './App.css';
import Header from "./components/Header";
import Uploader from "./components/Uploader";
import InputBody from "./components/InputBody";

function App() {
    return (
        <div style={{
            maxWidth: "500px",
            boxShadow: "1px 1px 5px grey",
            margin: "10px auto 0 auto",
            paddingBottom: "10px"
        }}>
            <Header />
            <hr/>
            <InputBody />
            <div style={{
                marginTop: "30px"
            }}>
                <Uploader />
            </div>
        </div>
    );
}

export default App;
