import { useEffect } from "react"

// custom hook for showing differnt route name in the title
const useTitle = title => {
    useEffect(() => {
        document.title = `${title} -RateUs`;
    }, [title])
};

export default useTitle;