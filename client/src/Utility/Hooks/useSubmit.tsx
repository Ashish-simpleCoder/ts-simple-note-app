import { useCallback, useState } from "react"

const useSubmit = () => {
    const [controller] = useState(new AbortController())

    const handleSubmit = useCallback(async(props:{url: string, method: 'GET'| 'POST'|'DELETE'|'PATCH', body: any}) => {
        const {url, method, body} = props

        const request = new Request(url, {
            method,
            body: JSON.stringify(body),
            headers: {'content-type': 'application/json'},
            credentials: 'include',
            signal: controller.signal
        })
        try {
            const res = await fetch(request)
            return res.json()
        } catch (error: any) {
            return new Error('error occured', {cause: Error(error)})
        }
    }, [])

    return {handleSubmit}
}
export default useSubmit