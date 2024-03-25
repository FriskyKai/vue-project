import {makeRequest} from "@/api/makeRequest.js";

export const uploadFiles = async (formData) => {
    const data = makeRequest('files', 'POST', formData)

    return data.json()
}