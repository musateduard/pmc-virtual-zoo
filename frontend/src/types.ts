import { Dispatch, SetStateAction } from "react";


export type Animal = {
    id?: number,
    name?: string,
    weight?: number | string,
    superpower?: string,
    extinct_since?: string}

export type AnimalFormProps = {
    setRender: Dispatch<SetStateAction<boolean>>,
    setFeedback: Dispatch<SetStateAction<boolean>>,
    setFeedbackMessage: Dispatch<SetStateAction<string>>}

export type AnimalItemProps = {
    animalData: Animal,
    setRender: Dispatch<SetStateAction<boolean>>,
    setFeedback: Dispatch<SetStateAction<boolean>>,
    setFeedbackMessage: Dispatch<SetStateAction<string>>}
