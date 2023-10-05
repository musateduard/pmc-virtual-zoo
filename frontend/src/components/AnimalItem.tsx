import { Box, Button, IconButton, Snackbar } from "@mui/material";
import { Dispatch, ReactElement, SetStateAction, useState } from "react";
import { Animal } from "../types";
import { Delete } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";


export default function AnimalItem(props: {animalData: Animal, setRender: Dispatch<SetStateAction<boolean>>}): ReactElement {

    const [deleteFeedback, setDeleteFeedback] = useState<boolean>(false);

    console.log(`AnimalItem feedback: ${deleteFeedback}`);


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
                setDeleteFeedback(true);}

            else {
                console.log(response.status);}}

        catch (error) {
            console.log(error);}

        props.setRender(render => !render);

        return;}


    const FeedbackCloseButton: ReactElement =

        <IconButton
            color="inherit"
            onClick={(event): void => setDeleteFeedback(false)}>

            <CloseIcon />

        </IconButton>


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

            <Snackbar
                // todo: move snackbar to parent component
                open={deleteFeedback}
                autoHideDuration={5000}
                onClose={(event, reason): void => setDeleteFeedback(false)}
                ClickAwayListenerProps={{onClickAway: (event): null => null}}
                message="Animal successfully removed"
                action={FeedbackCloseButton} />

            <Button
                variant='contained'
                size='small'
                endIcon={<Delete />}
                onClick={(event): void => deleteAnimal(props.animalData)}>

                remove
            </Button>

        </Box>

    return Html;}
