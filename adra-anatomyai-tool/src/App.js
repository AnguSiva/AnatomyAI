// import SignInWithGoogle from "./components/common/SignInWithGoogle";
import Home from "./components/dashboardInitialComponents/Home";
import Quiz from "./components/dashboardRemainingComponents/Quiz";
import { DataProvider } from "./context/DataContext";
function App() {
  return (
    <>
      <DataProvider>
        <Home />
      </DataProvider>
    </>
  );
}

export default App;
