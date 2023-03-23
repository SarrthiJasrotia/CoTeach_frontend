import React from "react";
import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Index from "../pages/Index";
import ShowBody from "../pages/showBody";
import New from "../pages/New";

const Body = (props) => {
    //set state for content and setContent function
    const [content, setContent] = useState(null);

    // **This is for local dev testing; switch to Heroku when done**
    const URL = "https://coteach-backend.herokuapp.com/content/";

    // This function is used to get the data from the database. It will wait until it is completed and the set the state of the content with the returned data
    const getContent = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setContent(data);
    }

    // User can create content
    const createContent = async (content) => {
        await fetch(URL, {
            method: "Post",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify(content)
        })
        getContent();
    };
    // users can delete content
    const deleteContent = async id => {
        // make delete request
        await fetch(URL + id, {
            method: "DELETE",
        })
        getContent();
    };

    //Initial render
    useEffect(() => {
        getContent();
    }, []);

    return (
        <main>
            <Switch>
                <Route exact path="/">
                    <Index
                        content={content}
                        user={props.user}
                    />
                </Route>
                
                <Route path="/content/new">
               {props.user ?
                    <New
                        createContent={createContent}
                    />: <h1>You need to be logged in</h1>}
                </Route>

                <Route
                    path="/content/:id"
                    render={(rp) => (
                        <ShowBody
                            content={content}
                            user={props.user}
                            deleteContent={deleteContent}
                            {...rp}
                        />
                    )}
                />
            </Switch>
        </main>
    );
}

export default Body;