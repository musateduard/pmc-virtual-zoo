import { Button, Card, InputAdornment, TextField } from "@mui/material";
import { ReactElement, useState } from "react";
import { Animal } from "../types";
import { AddCircle } from "@mui/icons-material";
import { AnimalFormProps } from "../types";


export default function AnimalForm(props: AnimalFormProps): ReactElement {

    // animal init values
    const initAnimal: Animal = {
        name: "",
        weight: "",
        superpower: "",
        extinct_since: ""};

    // animal state
    const [animal, setAnimal] = useState<Animal>(initAnimal);


    /** function that makes post request to create animal entry */
    const createAnimal: Function = async function(animalData: Animal): Promise<void> {

        try {
            console.log(JSON.stringify(animalData));

            const response: Response = await fetch(

                // request url
                `${process.env.REACT_APP_API_URL}/animals/`, {

                // request data
                method: "POST",
                mode: "cors",
                headers: {"content-type": "application/json"},
                body: JSON.stringify(animalData)});

            if (response.status >= 200 && response.status < 300) {

                console.log("animal successfully added");
                setAnimal(initAnimal);
                props.setRender(render => !render);
                props.setFeedbackMessage("Animal successfully added");
                props.setFeedback(true);}

            else {
                console.log(response.status);}}

        catch (error) {
            console.log(error);}

        return;}


    // rendered component
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

            <Button
                variant='contained'
                endIcon={<AddCircle />}
                onClick={(event): void => createAnimal(animal)}>

                add animal
            </Button>

        </Card>

    return Html;}
