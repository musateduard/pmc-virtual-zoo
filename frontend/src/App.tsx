import { AddCircle, Padding } from '@mui/icons-material';
import './App.css';
import { Box, Button, Card, Container, IconButton } from '@mui/material';
import React, { Fragment, ReactElement, useEffect, useState } from 'react';
import { Animal } from './types';
import AnimalForm from './components/AnimalForm';
import AnimalItem from './components/AnimalItem';


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


    useEffect(

        // effect handler
        () => {
            const controller: AbortController = new AbortController();
            getAnimals(controller);
            return () => {controller.abort()};},

        // dependency array
        []);


    const html =

            <Container
                component="main"
                sx={{
                    paddingX: 1}}>

                <Card
                    component="section"
                    sx={{
                        marginY: 2,
                        padding: 2}}>

                    <h1 style={{margin: 0}}>animals</h1>

                    {animals.map((item: any, index: number): ReactElement => {return <AnimalItem key={index} animalData={item} />})}

                </Card>

                {/* add animal form */}
                <AnimalForm />

            </Container>

    return html;}
