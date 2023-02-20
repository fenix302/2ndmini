import { Route } from "react-router-dom";
import InputForm from "./views/InputForm";
import ViewButton from "./views/ViewButton";
import Header from "./layout/header";
import Footer from "./layout/footer";
import Kakaomap from "./test/location";

function App(){

  return(
    
    <>
      <Header />

        <Route exact path="/" component={ViewButton} />
        <Route exact path="/location" component={Kakaomap} />
        <Route exact path="/:crud" component={InputForm} />
      
      

      
      
      
      <Footer />
    </>

    

  )
}

export default App;