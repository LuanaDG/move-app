import { useState, useEffect } from 'react'
import styles from '../styles/components/Countdown.module.css'

export function Countdown() {
    const [time, setTime] = useState(25 * 60);
    const [active, setActive] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    /* se não houver dois caracteres o padStart vai preencher com 0 o espaço da esquerda */
    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    function startCountdown() {
        setActive(true);
    }

    /*  recebe dois parâmetros: 1 {} uma função - o q eu quero executar?
     2 [] quando eu quero executar? sempre q algum valor mudar, neste caso o active 
     toda vez q o valor do seguno parâmetro mudar vai executar a primira função*/

    useEffect(() => {
        if (active && time > 0) {
            setTimeout(() => {
                setTime(time - 1)
            }, 1000);
        }
    }, [active, time])

    return (
        <div>
            <div className={styles.countdownContainer} >
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            <button type="button"
                className={styles.countdownButton}
                onClick={startCountdown}
            >
                Iniciar Ciclo
            </button>
        </div>
    )
}