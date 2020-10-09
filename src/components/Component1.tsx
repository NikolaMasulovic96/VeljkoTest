import React from 'react'
import styles from './Component1.module.css'
import { useHistory } from 'react-router-dom'

const Component1 = () => {
    const history = useHistory()
    const onClick = () => {
        history.push({
            pathname: '/com2/'
        })
    }

    return (
        <div className={styles.screenContainer}>
            <p>Component 1</p>
            <button onClick={onClick}>bilo sta</button>
        </div>
    )

}
export default Component1