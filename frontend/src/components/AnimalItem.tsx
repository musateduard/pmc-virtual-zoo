import { Box, Button } from "@mui/material";
import { ReactElement } from "react";
import { Animal } from "../types";
import { Delete } from "@mui/icons-material";


export default function AnimalItem(props: {animalData: Animal}): ReactElement {

    const html: ReactElement =

        <Box
            key={22}
            component="div"
            sx={{
                display: "flex",
                justifyContent: "space-between",
                marginY: 1}}>

            <h4
                style={{
                    marginBlock: 0,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center"}}>

                {props.animalData.name}
            </h4>

            <Button
                variant='contained'
                size='small'
                endIcon={<Delete />}>

                remove
            </Button>

        </Box>

    return html;}
