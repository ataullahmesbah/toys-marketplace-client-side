import { useEffect } from "react"

const useSetTitle = title => {
    useEffect( () => {
        document.title = `${title} - Dreamy Daze Toys`;
    }, [title])
}

export default useSetTitle;