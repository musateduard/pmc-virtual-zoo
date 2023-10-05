import { Button, Card, IconButton, InputAdornment, Snackbar, TextField } from "@mui/material";
import { Dispatch, ReactElement, SetStateAction, useState } from "react";
import { Animal } from "../types";
import { AddCircle } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";


export default function AnimalForm(props: {setRender: Dispatch<SetStateAction<boolean>>}): ReactElement {

    const initAnimal: Animal = {
        name: "",
        weight: "",
        superpower: "",
        extinct_since: ""};

    const [animal, setAnimal] = useState<Animal>(initAnimal);
    const [feedback, setFeedback] = useState<boolean>(false);

    // console.log(`AnimalForm feedback: ${feedback}`);


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

                console.log("animal successfully added");
                setFeedback(true);
                setAnimal(initAnimal);}

            else {
                console.log(response.status);}}

        catch (error) {
            console.log(error);}

        props.setRender(render => !render);

        return;}


    const FeedbackCloseButton: ReactElement =

        <IconButton
            color="inherit"
            onClick={(event): void => setFeedback(false)}>

            <CloseIcon />

        </IconButton>


    const Html: ReactElement =

        <Card
            component="form"
            sx={{
                marginY: 2,
                padding: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start"}}>

            <h2>Animal Form</h2>
            <p>Enter Animal Data:</p>

            <TextField
                sx={{
                    display: "block",
                    marginY: 1}}
                label="Name"
                variant="outlined"
                fullWidth
                type="text"
                required
                value={animal.name}
                onChange={(event): void => setAnimal({...animal, name: event.target.value})} />

            <TextField
                sx={{display: "block", my: 1}}
                InputProps={{startAdornment: <InputAdornment position="start" >kg</InputAdornment>}}
                label="Weight"
                variant="outlined"
                fullWidth
                type="number"
                required
                value={animal.weight}
                onChange={(event): void => setAnimal({...animal, weight: Number(event.target.value)})} />

            <TextField
                sx={{display: "block", my: 1}}
                label="Superpower"
                variant="outlined"
                fullWidth
                type="text"
                required
                value={animal.superpower}
                onChange={(event): void => setAnimal({...animal, superpower: event.target.value})} />

            <TextField
                sx={{display: "block", my: 1}}
                label="Extinct Since"
                variant="outlined"
                fullWidth
                type="text"
                required
                value={animal.extinct_since}
                onChange={(event): void => setAnimal({...animal, extinct_since: event.target.value})} />

            <Snackbar
                // todo: move snackbar to parent component
                open={feedback}
                autoHideDuration={5000}
                onClose={(event, reason): void => setFeedback(false)}
                ClickAwayListenerProps={{onClickAway: (event): null => null}}
                message="Animal successfully added"
                action={FeedbackCloseButton} />

            <Button
                variant='contained'
                endIcon={<AddCircle />}
                onClick={(event): void => createAnimal(animal)}>

                add animal
            </Button>

        </Card>

    return Html;}
