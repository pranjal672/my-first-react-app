import { useRouteError } from "react-router-dom"

export default function ErrorThrow() {

    const error = useRouteError();

    return (
        <div>
            <p>
                {error.statusText || error.message}
            </p>
        </div>
    )
}