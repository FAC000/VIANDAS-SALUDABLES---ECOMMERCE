import { useState } from "react"

export const UseCounter = (minValue = 0, maxValue = 10, step = 1) => {
    const [count, setCount] = useState(minValue)

    const incrementar = () => {
        if (count + step <= maxValue) {
            setCount(count + step)
        }
    }

    const decrementar = () => {
        if (count - step >= 0) {
            setCount(count - step)
        }
    }

    return { count, incrementar, decrementar }

}
