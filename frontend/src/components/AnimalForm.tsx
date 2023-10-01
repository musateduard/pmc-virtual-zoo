import { Button, Card, Container, TextField } from "@mui/material";
import { Fragment, ReactElement, useState } from "react";
import { Animal } from "../types";
import { AddCircle } from "@mui/icons-material";


export default function AnimalForm(): ReactElement {

    const [animal, setAnimal] = useState<Animal>({});

    console.log(animal);

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

        window.location.reload();

        return;}

    const html: ReactElement =

        <Card
            component="form"
            sx={{
                marginY: 2,
                padding: 2}}>

            <p>enter animal</p>

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

            <Button
                variant='contained'
                endIcon={<AddCircle />}
                onClick={(event): void => sendAnimal(animal)}>

                add animal
            </Button>

        </Card>

    return html;}
