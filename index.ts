import React from "react"

export const useToggleState = (): { state: boolean, toggle: () => void } => {
    const [state, setState] = React.useState(false)
    const toggle = () => { setState(!state) }
    return { state, toggle }
}

export const useWindowSize = () => {
    const [size, setSize] = React.useState({
        width: null,
        height: null
    })

    React.useLayoutEffect(() => {

        const width: any = window.innerWidth
        const height: any = window.innerHeight


        const handleResize = () => {
            setSize({
                width,
                height
            })
        };

        handleResize()
        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    return size
}