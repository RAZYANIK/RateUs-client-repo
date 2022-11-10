import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} -RateUs`;
    }, [title])
};

export default useTitle;