import { Box, Button } from "@mui/material";
import { ReactElement } from "react";
import { Animal } from "../types";
import { Delete } from "@mui/icons-material";


export default function AnimalItem(props: {animalData: Animal}): ReactElement {


    const deleteAnimal: Function = async function(animalData: Animal): Promise<void> {

        console.log(`deleting animal ${animalData.id} ${animalData.name}`)

        try {
            console.log(JSON.stringify(animalData));
            console.log(`http://localhost:8000/animals/${animalData.id}/`);

            const response: Response = await fetch(

                // fetch url
                `http://localhost:8000/animals/${animalData.id}/`, {

                // request data
                method: "DELETE"});

            if (response.status >= 200 && response.status < 300) {
                console.log("animal successfully deleted");}

            else {
                console.log(response.status);}}

        catch (error) {
            console.log(error);}

        window.location.reload();

        return;}


    const html: ReactElement =

        <Box
            key={22}
            component="li"
            sx={{
                display: "flex",
                justifyContent: "space-between",
                marginY: 1}}>

            <h2
                style={{
                    marginBlock: 0,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center"}}>

                {props.animalData.name}
            </h2>

            <Button
                variant='contained'
                size='small'
                endIcon={<Delete />}
                onClick={(event): void => deleteAnimal(props.animalData)}>

                remove
            </Button>

        </Box>

    return html;}
