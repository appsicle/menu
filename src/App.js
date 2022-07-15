import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import MenuInput from "./menuInput/MenuInput";
import MenuRender from "./MenuRender";

function App() {
  return (
    <div>
      <header></header>
      <body>
        <div className="main-container">
          <MenuInput />
          <MenuRender />
        </div>
      </body>
    </div>
  );
}

export default App;
