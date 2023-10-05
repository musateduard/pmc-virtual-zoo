import { Box, Button } from "@mui/material";
import { Dispatch, ReactElement, SetStateAction } from "react";
import { Animal } from "../types";
import { Delete } from "@mui/icons-material";


type AnimalItemProps = {
    animalData: Animal,
    setRender: Dispatch<SetStateAction<boolean>>,
    setFeedback: Dispatch<SetStateAction<boolean>>,
    setFeedbackMessage: Dispatch<SetStateAction<string>>}


export default function AnimalItem(props: AnimalItemProps): ReactElement {


    const deleteAnimal: Function = async function(animalData: Animal): Promise<void> {

        console.log(`deleting animal ${animalData.id} ${animalData.name}`);

        try {
            console.log(JSON.stringify(animalData));
            console.log(`http://localhost:8000/animals/${animalData.id}/`);

            const response: Response = await fetch(

                // fetch url
                `http://localhost:8000/animals/${animalData.id}/`, {

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


    const Html: ReactElement =

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

    return Html;}
