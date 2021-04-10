import React from "react"
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import FeedsPostPage from '../screens/FeedsPostPage/FeedsPost'
import LoginPage from "../screens/LoginPage/LoginPage"
import PostPage from "../screens/PostPage/PostPage"
import SignUpPage from "../screens/SignUpPage/SignUpPage"


const Router = () => {
    return(
                  
            <Switch>

                <Route exact path="/">
                    <FeedsPostPage />
                </Route>
                <Route exact path="/login">
                    <LoginPage />
                </Route>
                <Route exact path="/cadastro">
                    <SignUpPage />
                </Route>
                <Route exact path="/post/:id">
                    <PostPage />
                </Route>
                

            </Switch>
       
       
    )
}

export default Router