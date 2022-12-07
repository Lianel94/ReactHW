import { Message } from "./components/Message"

export function App() {
    const userName = 'Vicky'
    return (
        <div>
            <h1>Homework</h1>
            <Message text='Text by props from App' name = {userName}/>
        </div>
    )
}

