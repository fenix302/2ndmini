import { Route, Switch } from "react-router-dom";
import InputForm from "./views/InputForm";
import ViewButton from "./views/ViewButton";
import Header from "./layout/header";
import Footer from "./layout/footer";
import about from "./test/about";
import Kakaomap from "./pages/location";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import LectureList from "./pages/LectureList";
import BoardList from "./pages/BoardList";
import Faq from "./pages/Faq";
import Registration from "./pages/Registration";
import 'bootstrap/dist/css/bootstrap.min.css';


function App(){

  return(
    
    <>
      <Header />
        
        <Switch>
          <Route exact path="/BoardList" component={BoardList} />
          <Route exact path="/LectureList" component={LectureList} />
          <Route exact path="/about" component={about} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/registration" component={Registration} />
          <Route exact path="/location" component={Kakaomap} />
          <Route exact path="/Faq" component={Faq} />
          <Route exact path="/:crud" component={InputForm} />
          <Route exact path="/" component={ViewButton} />
          
        </Switch>
    
        
      
      

      
      
      
      <Footer />
    </>

    

  )
}

export default App;