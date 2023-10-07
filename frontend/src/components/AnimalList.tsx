import { Card, List } from "@mui/material";
import { Dispatch, ReactElement, SetStateAction } from "react";
import AnimalItem from "./AnimalItem";
import { Animal } from "../types";


type AnimalListProps = {
    animals: Animal[],
    setRender: Dispatch<SetStateAction<boolean>>,
    setFeedback: Dispatch<SetStateAction<boolean>>,
    setFeedbackMessage: Dispatch<SetStateAction<string>>}


export default function AnimalList(props: AnimalListProps): ReactElement {

    const animals: Animal[] = props.animals;

    // rendered component
    const Html: ReactElement =

        <Card
            component="section"
            sx={{
                marginY: 2,
                padding: 2}}>

            <h2 style={{margin: 0}}>Animal List</h2>

            <List
                component="ul">

                {animals.length > 0 ?

                    // render items list if present
                    animals.map((item: Animal, index: number): ReactElement => <AnimalItem
                        key={index}
                        animalData={item}
                        setFeedback={props.setFeedback}
                        setFeedbackMessage={props.setFeedbackMessage}
                        setRender={props.setRender} />) :

                    // else display hint
                    <h2>No Animals</h2>}
            </List>

        </Card>

    return Html;}
