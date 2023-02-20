import { useSelector } from "react-redux"
import { selectToken } from "../utils/selectors"
import { Navigate } from "react-router-dom"

export default function ProtectedRoute({children}) {

    const token = useSelector(selectToken)

    return(
        token === '' ? <Navigate to='/' replace={true} /> : children
    )
}