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


    /** function that sends delete request to remove animal entry */
    const deleteAnimal: Function = async function(animalData: Animal): Promise<void> {

        console.log(`deleting animal ${animalData.id} ${animalData.name}`);

        try {
            console.log(JSON.stringify(animalData));
            console.log(`${process.env.REACT_APP_API_URL}animals/${animalData.id}/`);

            const response: Response = await fetch(

                // request url
                `${process.env.REACT_APP_API_URL}animals/${animalData.id}/`, {

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


    // rendered component
    const Html: ReactElement =

        <Box
            component="li"
            sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
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

            <Button
                variant='contained'
                size='small'
                endIcon={<Delete />}
                onClick={(event): void => deleteAnimal(props.animalData)}>

                remove
            </Button>

        </Box>

    return Html;}
