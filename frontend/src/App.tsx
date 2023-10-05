import './App.css';
import { Container, IconButton, Snackbar } from '@mui/material';
import { ReactElement, useEffect, useState } from 'react';
import { Animal } from './types';
import AnimalForm from './components/AnimalForm';
import AnimalList from './components/AnimalList';
import CloseIcon from "@mui/icons-material/Close";


export default function App(): ReactElement {

    // state properties
    const [animals, setAnimals] = useState<Animal[]>([]);
    const [render, setRender] = useState<boolean>(false);
    const [feedbackMessage, setFeedbackMessage] = useState<string>("");
    const [feedback, setFeedback] = useState<boolean>(false);


    /** function used to fetch animal data from backend */
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
            return (): void => controller.abort()},

        // render every time render state changes
        [render]);


    /** close component for the snackbar close button */
    const FeedbackCloseButton: ReactElement =

        <IconButton
            color="inherit"
            onClick={(event): void => setFeedback(false)}>

            <CloseIcon />

        </IconButton>


    const Html: ReactElement =

            <Container
                component="main"
                sx={{
                    paddingX: 1}}>

                <h1>Virtual Zoo</h1>

                <Snackbar
                    open={feedback}
                    autoHideDuration={5000}
                    onClose={(event, reason): void => setFeedback(false)}
                    ClickAwayListenerProps={{onClickAway: (event): null => null}}
                    message={feedbackMessage}
                    action={FeedbackCloseButton} />

                {/* animal list component */}
                <AnimalList animals={animals} setRender={setRender} setFeedback={setFeedback} setFeedbackMessage={setFeedbackMessage} />

                {/* add animal form */}
                <AnimalForm setRender={setRender} setFeedback={setFeedback} setFeedbackMessage={setFeedbackMessage} />

            </Container>

    return Html;}
