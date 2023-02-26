import ReactDOM from "react-dom/client";
import SearchInput from "./SearchInput";

const App = () => {
  return (
    <>
      <SearchInput />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
