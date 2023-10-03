import { Button, Card, Container, TextField } from "@mui/material";
import { Dispatch, Fragment, ReactElement, SetStateAction, useState } from "react";
import { Animal } from "../types";
import { AddCircle } from "@mui/icons-material";


export default function AnimalForm(props: {setRender: Dispatch<SetStateAction<boolean>>}): ReactElement {

    const [animal, setAnimal] = useState<Animal>({});


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
                // todo: display hint after submitting form
                console.log("animal successfully added");
                setAnimal({});}

            else {
                console.log(response.status);}}

        catch (error) {
            console.log(error);}

        props.setRender(render => !render);

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
                onClick={(event): void => createAnimal(animal)}>

                add animal
            </Button>

        </Card>

    return html;}
