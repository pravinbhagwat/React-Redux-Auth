import Signup from "./components/Signup";
import Profile from "./components/Profile";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";


function App() {
  const user = useSelector((state) => state.user);
  
  return (
    <>
        <Routes>
          <Route exact path="/" element = {<Signup />} />
          <Route 
            exact 
            path="/profile" 
            render={() => (
              user.accessToken ? <Profile /> : <Signup />
            )} />
        </Routes>
    </>
  );
}

export default App;
