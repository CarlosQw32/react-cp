import { Switch,Route } from "react-router-dom";
import Sobre from "./paginas/sobre";
import Home from "./paginas/home";



export default function Routes() {
    return(
        <Switch>
            <Route exact path = '/'>
                <Home></Home>
            </Route>

            <Route exact path = '/sobre'>
                <Sobre></Sobre>
            </Route>

            
        </Switch>
    
    )
}