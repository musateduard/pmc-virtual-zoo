import { AddCircle } from '@mui/icons-material';
import './App.css';
import { Box, Button, Container, IconButton } from '@mui/material';
import React, { Fragment, ReactElement, useEffect, useState } from 'react';
import { Animal } from './types';


export default function App(): ReactElement {

    const [animals, setAnimals] = useState<Animal[]>([]);


    const getAnimals: Function = async function(controller: AbortController): Promise<void> {

        try {
            const response: Response = await fetch("http://localhost:8000/animals/", {signal: controller.signal});
            const data: Animal[] = await response.json();

            console.log(data);

            setAnimals(data);}

        catch (error) {
            console.log(error);}

        return;}


    const sendAnimal: Function = async function(animalData: Animal): Promise<void> {

        try {
            console.log(JSON.stringify(animalData));

            const response: Response = await fetch(

                // fetch url
                "http://localhost:8000/animals/", {

                // request data
                method: "POST",
                mode: "cors",
                headers: {"content-type": "application/json"},
                body: JSON.stringify(animalData)});

            console.log(response.status);}

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

            <Container
                component="main">

                {animals.map((item: any, index: number): ReactElement => {

                    const element: ReactElement =

                        <Box
                            key={index}>

                            {item.name}
                        </Box>

                    return element;})}

            </Container>

            <Button
                variant='contained'
                endIcon={<AddCircle />}
                onClick={(event): void => sendAnimal({
                    name: "dog",
                    weight: 55,
                    superpower: "speed",
                    extinct_since: "not extinct"})}>

                add animal
            </Button>

        </Fragment>


    return html;}
