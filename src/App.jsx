import "./App.scss";
import Counter from "./components/widgets/Counter";

function App() {
  return (
    <>
      <div>我是首頁</div>
      <button type="button" className="btn btn-primary">
        Primary
      </button>
      <i className="bi bi-6-circle-fill"></i>
      <Counter />
    </>
  );
}

export default App;
