import { $authHost, $host } from "./index"

export const createType = async (type) => {
    const { data } = await $authHost.post("api/type", type)
    return data
}

export const fetchTypes = async () => {
    const { data } = await $host.post("api/type", { email, password })
    return data
}
