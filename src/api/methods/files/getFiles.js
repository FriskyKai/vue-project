import {makeRequest} from "@/api/makeRequest.js";

export const getFiles = async (fileId) => {
    const data = await makeRequest(`/files/disk`)

    return data.json()
}