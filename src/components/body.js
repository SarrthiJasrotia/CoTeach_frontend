import { Route, Switch } from "react-router-dom";
import Index from "../pages/index";
import Show from "../pages/show";

function Body(props) {
    return (
        <main>
            <Switch>
                <Route exact path="/">
                    <Index />
                </Route>
                <Route
                    path="/content/:id"
                    render={(rp) => (
                        <Show
                            {...rp}
                        />
                    )}
                />
            </Switch>
        </main>
    );
}

export default Body;