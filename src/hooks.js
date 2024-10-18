import { useState, useEffect } from "react";
import axios from "axios";
import {v1 as uuid} from "uuid";

const useFlip = (defaultState = true) => {
    const [isFlipped, setFlipped] = useState(defaultState)

    const flip = () => {
        setFlipped(isUp => !isUp)
    }

    return [isFlipped, flip]
}

const useAxios = (baseUrl) => {
    const [responses, setResponses] = useState([]) 

    const addResponse = async (restOfUrl='') => {
        const res = await axios.get(`${baseUrl}${restOfUrl}`);
        setResponses(
            [...responses, 
            { ...res.data, id: uuid() }
        ]);
    }

    return [responses, addResponse]
}

export { useFlip, useAxios };