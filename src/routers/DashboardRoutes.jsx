import React from 'react'
import { Switch, Route,Redirect } from "react-router-dom";
import { DcScreen } from '../components/dc/DcScreen';
import { HeroScreen } from '../components/heroes/HeroScreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { NavBar } from "../components/ui/NavBar";

export const DashboardRoutes = () => {
    return (
        <div>
            <NavBar/>
            <div>
                <Switch>
                    <Route exact path="/marvel" component={MarvelScreen}></Route>
                    <Route exact path="/dc" component={DcScreen}></Route>
                    <Route exact path="/heroe/:heroeId" component={HeroScreen}></Route>
                    <Redirect to="/marvel"></Redirect>
                </Switch>

            </div>
        </div>
    )
}
