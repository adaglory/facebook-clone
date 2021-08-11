import "./App.css";
import Feed from "./feed";
import Header from "./header";
import { useStateValue } from "./stateProvider";
import Login from "./login";
import SideBar from "./sidebar";
import Widgets from "./widgets";

function App() {
  const [user, dispatch] = useStateValue();
  // const user = null;
  return (
    <div className='App'>
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className='app__body'>
            <SideBar />
            <Feed />
            <Widgets />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
