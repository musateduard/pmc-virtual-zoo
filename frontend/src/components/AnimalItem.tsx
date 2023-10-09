import { Box, Button, Dialog, DialogContent, DialogContentText, DialogTitle, InputAdornment, TextField } from "@mui/material";
import { ReactElement, useState } from "react";
import { Animal } from "../types";
import { Delete, Edit } from "@mui/icons-material";
import { AnimalItemProps } from "../types";


export default function AnimalItem(props: AnimalItemProps): ReactElement {

    // animal state
    const [animal, setAnimal] = useState<Animal>(props.animalData);
    const [dialog, setDialog] = useState<boolean>(false);


    /** function that sends delete request to remove animal entry */
    const deleteAnimal: Function = async function(animalData: Animal): Promise<void> {

        console.log(`deleting animal ${animalData.id} ${animalData.name}`);

        try {
            console.log(JSON.stringify(animalData));
            console.log(`${process.env.REACT_APP_API_URL}/animals/${animalData.id}/`);

            const response: Response = await fetch(

                // request url
                `${process.env.REACT_APP_API_URL}/animals/${animalData.id}/`, {

                // request data
                method: "DELETE"});

            if (response.status >= 200 && response.status < 300) {
                console.log("animal successfully deleted");
                props.setRender(render => !render);
                props.setFeedbackMessage("Animal successfully deleted");
                props.setFeedback(true);}

            else {
                console.log(response.status);}}

        catch (error) {
            console.log(error);}

        return;}


    /** function that updates animals data */
    const updateAnimal: Function = async function(animalData: Animal): Promise<void> {

        console.log(`updating animal ${animalData.id} ${animalData.name}`);

        try {
            const response: Response = await fetch(

                // request url
                `${process.env.REACT_APP_API_URL}/animals/${animalData.id}/`, {

                // request data
                method: "PATCH",
                mode: "cors",
                headers: {"content-type": "application/json"},
                body: JSON.stringify(animalData)
            });

            if (response.status >= 200 && response.status < 300) {
                console.log("animal successfully updated");
                setDialog(false);
                props.setRender(render => !render);
                props.setFeedbackMessage("Animal successfully updated");
                props.setFeedback(true);}

            else {
                console.log(response.status);
                console.log(await response.text());}}

        catch (error) {
            console.log(error);}

        return;}


    // rendered component
    const Html: ReactElement =

        <Box
            component="li"
            sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "stretch",
                marginY: 1}}>

            <Box>

                <h2
                    style={{
                        marginBlock: 0,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center"}}>

                    {props.animalData.name}
                </h2>

                <p>Weight: {props.animalData.weight}</p>
                <p>Superpower: {props.animalData.superpower}</p>
                <p>Extinct: {props.animalData.extinct_since}</p>

            </Box>

            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly"}}>

                <Button
                    variant='contained'
                    endIcon={<Delete />}
                    onClick={(event): void => deleteAnimal(props.animalData)}>

                    Delete
                </Button>

                <Button
                    variant="contained"
                    endIcon={<Edit />}
                    onClick={(event): void => setDialog(true)}>

                    Edit
                </Button>

            </Box>

            <Dialog
                open={dialog}
                onClose={(event, reason): void => setDialog(false)}>

                <DialogTitle>Update Animal</DialogTitle>
                <DialogContent>

                    <DialogContentText>Enter new animal data:</DialogContentText>

                    <TextField
                        sx={{
                            display: "block",
                            marginY: 1}}
                        label="Name"
                        variant="outlined"
                        fullWidth
                        value={animal.name}
                        onChange={(event): void => setAnimal({...animal, name: event.target.value})}
                        type="text" />

                    <TextField
                        sx={{
                            display: "block",
                            marginY: 1}}
                        InputProps={{startAdornment: <InputAdornment position="start" >kg</InputAdornment>}}
                        label="Weight"
                        variant="outlined"
                        fullWidth
                        value={animal.weight}
                        onChange={(event): void => setAnimal({...animal, weight: Number(event.target.value)})}
                        type="number" />

                    <TextField
                        sx={{
                            display: "block",
                            marginY: 1}}
                        label="Superpower"
                        variant="outlined"
                        fullWidth
                        value={animal.superpower}
                        onChange={(event): void => setAnimal({...animal, superpower: event.target.value})}
                        type="text" />

                    <TextField
                        sx={{
                            display: "block",
                            marginY: 1}}
                        label="Extinct Since"
                        variant="outlined"
                        fullWidth
                        value={animal.extinct_since}
                        onChange={(event): void => setAnimal({...animal, extinct_since: event.target.value})}
                        type="text" />

                    <Button
                        variant="contained"
                        onClick={(event): void => updateAnimal(animal)}>

                        Submit
                    </Button>

                </DialogContent>

            </Dialog>

        </Box>

    return Html;}
