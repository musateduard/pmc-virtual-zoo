import { Card, List } from "@mui/material";
import { Dispatch, ReactElement, SetStateAction } from "react";
import AnimalItem from "./AnimalItem";
import { Animal } from "../types";


export default function AnimalList(props: {animals: Animal[], setRender: Dispatch<SetStateAction<boolean>>}): ReactElement {

    const animals: Animal[] = props.animals;
    const setRender: Dispatch<SetStateAction<boolean>> = props.setRender;

    const Html: ReactElement =

        <Card
            component="section"
            sx={{
                marginY: 2,
                padding: 2}}>

            <h1 style={{margin: 0}}>Animals</h1>

            <List
                component="ul">

                {animals.length > 0 ?

                    // render list if items present
                    animals.map((item: any, index: number): ReactElement => <AnimalItem key={index} animalData={item} setRender={setRender} />) :

                    // display hint if items not present
                    <h2>no animals</h2>}
            </List>

        </Card>

    return Html;}
