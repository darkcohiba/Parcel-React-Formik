import ReactDOM from "react-dom/client";
import Form from "./components/Form";
// import './styles.css';



const App = () => {
    return(
        <div id="base">
            <Form />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <App />
);

