import { useState } from "react";
import styles from './Message.module.css'


export function Message (props) {
    const [name, setName] = useState(props.userName)
    console.log (props)
    return (
        <>
            <h2>Hello, <span className={styles.name}>{ props.name }</span></h2>
            <p>{props.text}</p>
            
        </>
    )
}