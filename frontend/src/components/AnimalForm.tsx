import { Button, Card, Container, IconButton, Snackbar, TextField } from "@mui/material";
import { Dispatch, Fragment, ReactElement, SetStateAction, useState } from "react";
import { Animal } from "../types";
import { AddCircle } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";


export default function AnimalForm(props: {setRender: Dispatch<SetStateAction<boolean>>}): ReactElement {

    const [animal, setAnimal] = useState<Animal>({});
    const [feedback, setFeedback] = useState<boolean>(false);


    const createAnimal: Function = async function(animalData: Animal): Promise<void> {

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

            if (response.status >= 200 && response.status < 300) {

                // todo: clear form data after submitting
                console.log("animal successfully added");
                setAnimal({});
                setFeedback(true);}

            else {
                console.log(response.status);}}

        catch (error) {
            console.log(error);}

        props.setRender(render => !render);

        return;}


    const FeedbackCloseButton: ReactElement =

        <Fragment>

            <IconButton
                color="inherit"
                onClick={(event): void => setFeedback(false)}>

                <CloseIcon />

            </IconButton>

        </Fragment>

    const Html: ReactElement =

        <Card
            component="form"
            sx={{
                marginY: 2,
                padding: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start"}}>

            <h1>Enter Animal</h1>

            <TextField
                sx={{
                    display: "block",
                    marginY: 1}}
                label="Name"
                variant="outlined"
                fullWidth
                required
                onChange={(event): void => setAnimal({...animal, name: event.target.value})} />

            <TextField
                sx={{display: "block", my: 1}}
                label="Weight"
                variant="outlined"
                fullWidth
                required
                onChange={(event): void => setAnimal({...animal, weight: Number(event.target.value)})} />

            <TextField
                sx={{display: "block", my: 1}}
                label="Superpower"
                variant="outlined"
                fullWidth
                required
                onChange={(event): void => setAnimal({...animal, superpower: event.target.value})} />

            <TextField
                sx={{display: "block", my: 1}}
                label="Extinct Since"
                variant="outlined"
                fullWidth
                required
                onChange={(event): void => setAnimal({...animal, extinct_since: event.target.value})} />

            <Snackbar
                open={feedback}
                autoHideDuration={5000}
                onClose={(event): void => setFeedback(false)}
                message="Animal added successfully"
                action={FeedbackCloseButton} />

            <Button
                variant='contained'
                endIcon={<AddCircle />}
                onClick={(event): void => createAnimal(animal)}>

                add animal
            </Button>

        </Card>

    return Html;}
