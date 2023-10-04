import './App.css';
import { Container } from '@mui/material';
import { ReactElement, useEffect, useState } from 'react';
import { Animal } from './types';
import AnimalForm from './components/AnimalForm';
import AnimalList from './components/AnimalList';


export default function App(): ReactElement {

    const [animals, setAnimals] = useState<Animal[]>([]);
    const [render, setRender] = useState<boolean>(false);


    const getAnimals: Function = async function(controller: AbortController): Promise<void> {

        try {
            const response: Response = await fetch("http://localhost:8000/animals/", {signal: controller.signal});
            const data: Animal[] = await response.json();

            setAnimals(data);}

        catch (error) {
            console.log(error);}

        return;}


    useEffect(

        // effect handler
        () => {
            const controller: AbortController = new AbortController();
            getAnimals(controller);
            return (): void => {controller.abort()};},

        // dependency array
        [render]);


    const Html: ReactElement =

            <Container
                component="main"
                sx={{
                    paddingX: 1}}>

                {/* animal list component */}
                <AnimalList animals={animals} setRender={setRender} />

                {/* add animal form */}
                <AnimalForm setRender={setRender} />

            </Container>

    return Html;}
