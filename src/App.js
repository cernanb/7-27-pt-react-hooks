import CounterClass from "./components/CounterClass";
import CounterFunctionalComponent from "./components/CounterFunctionalComponent";
import FormClass from "./components/FormClass";
import FormFunctional from "./components/FormFunctional";
import GithubUseEffect from "./components/GithubUseEffect";

function App() {
  return (
    <div
      style={{
        height: "70vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* <CounterClass /> */}
      {/* <CounterFunctionalComponent /> */}
      {/* <FormClass /> */}
      {/* <FormFunctional /> */}
      <GithubUseEffect />
    </div>
  );
}

export default App;
