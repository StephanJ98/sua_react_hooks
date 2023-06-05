import React from "react"

export default function useToggleState() {
    const [state, setState] = React.useState(false)
    const toggle = () => { setState(!state) }
    return { state, toggle }
}

export function useWindowSize() {
    const [size, setSize] = React.useState({
        width: null,
        height: null
    })

    React.useLayoutEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight
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