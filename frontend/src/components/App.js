import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Layout from "./layout/layout";

import Main from "./main";
import Post from "./post";
import User from "./user";
import Settings from "./settings";
import Signup from "./signup";
import Login from "./login";
import Submit from "./submit";
import Edit from "./post/edit";
import Trending from "./trending";
import Newest from "./newest";
import Comment from "./comment";
import Comments from "./comments";
import Past from "./past";
function App() {
   return (
      <div className=" bg-yellow-50  w-5/6 mx-auto m-2 text-sm">
         <Layout>
            <BrowserRouter>
               <Switch>
                  <Route exact path="/" component={Main} />
                  <Route exact path="/trending" component={Trending} />
                  <Route exact path="/post/:id" component={Post} />
                  <Route exact path="/comment/:id" component={Comment} />

                  <Route exact path="/post/edit/:id" component={Edit} />

                  <Route exact path="/past" component={Past} />
                  <Route exact path="/user/:id" component={User} />
                  <Route exact path="/settings" component={Settings} />
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/signup" component={Signup} />
                  <Route exact path="/newest" component={Newest} />
                  <Route exact path="/submit" component={Submit} />
                  <Route exact path="/comments" component={Comments} />
               </Switch>
            </BrowserRouter>
         </Layout>
      </div>
   );
}
export default App;
