import { Route } from "react-router-dom";
import Layout from "./layout/layout";
import InputForm from "./views/InputForm";

function App(){

  return(
    
    <>
      <Route exact path="/" component={Layout} />
      <Route exact path="/:crud" component={InputForm} />
    </>

    

  )
}

export default App;