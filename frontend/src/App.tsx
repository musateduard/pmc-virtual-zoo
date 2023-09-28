import './App.css';
import React, { Fragment, ReactElement, useEffect, useState } from 'react';


export default function App(): ReactElement {

    const [animals, setAnimals] = useState([]);


    const getAnimals: Function = async function(controller: AbortController): Promise<void> {

        try {
            const response: Response = await fetch("http://localhost:8000/animals/", {signal: controller.signal});
            const data = await response.json();

            setAnimals(data);}

        catch (error) {
            console.log(error);}

        return;}


    useEffect(

        // effect handler
        () => {
            const controller: AbortController = new AbortController();
            getAnimals(controller);
            return () => {controller.abort()};},

        // dependency array
        []);


    const html =

        <Fragment>

            <h3>animals</h3>

            {animals.map((item: any, index: number): ReactElement => {return <p key={index}>{item.name}</p>})}

        </Fragment>


    return html;}
