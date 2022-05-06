import { useCallback, useEffect, useState } from "react"

const useMediaQuery = ({width = 750 }: {width?: number}) => {
    const [show, setShow] = useState(window.innerWidth > width)
    const handleResize = useCallback(() => setShow(window.innerWidth > width), [])

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return [show]
}
export default useMediaQuery