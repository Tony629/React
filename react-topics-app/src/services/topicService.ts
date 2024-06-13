import axios from "axios";
import { Topic } from "../types/Topics";

export async function getTopics(): Promise<Topic[]> {
    const response = await axios.get<Topic[]>("https://663b4525fee6744a6ea1014c.mockapi.io/api/v1/topics")
    return response.data;
}

export async function getTopic(id: number) {
    const response = await axios.get<Topic>(`https://663b4525fee6744a6ea1014c.mockapi.io/api/v1/topics/${id}`)
    return response.data;
}

export async function deleteTopic(id: number) {
    const response = await axios.delete(`https://663b4525fee6744a6ea1014c.mockapi.io/api/v1/topics/${id}`)
    console.log(response)
    return response;
}