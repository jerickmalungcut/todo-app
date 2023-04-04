import "./index.css";
import TodoWrapper from "./components/TodoWrapper";

function App() {
  return (
    <div className="min-h-screen min-w-full flex justify-center items-start bg-primary">
      <div className="container mx-auto flex justify-center mt-16 ">
        <TodoWrapper />
      </div>
    </div>
  );
}

export default App;
