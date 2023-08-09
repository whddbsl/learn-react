/* eslint-disable no-unused-vars */
import RootLayout from "./layout/RootLayout";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <RootLayout>
        <Home />
      </RootLayout>
    </div>
  );
}

export default App;
