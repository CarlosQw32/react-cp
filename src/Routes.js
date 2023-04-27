import { Switch,Route } from "react-router-dom";
import Sobre from "./paginas/sobre";
import Home from "./paginas/home";
import Cep from "./paginas/cep";
import Email from "./paginas/email";
import Rick from "./paginas/rick";
import Tmz from "./paginas/tmz";
import AppRick_V3 from "./paginas/rickV2"





export default function Routes() {
    return(
        <Switch>
            
            <Route exact path = '/'>
                <Home></Home>
            </Route>

            <Route exact path = '/sobre'>
                <Sobre></Sobre>
            </Route>

            <Route exact path='/cep'>
                <Cep></Cep>
            </Route>

            <Route exact path='/email'>
                <Email></Email>
            </Route>

            <Route exact path='/rick'>
                <Rick></Rick>
            </Route>

            <Route exact path='/tmz'>
                <Tmz></Tmz>
            </Route>

            <Route exact path='/rickV3'>
                <AppRick_V3></AppRick_V3>
            </Route>
            

            
        </Switch>
    
    )
}