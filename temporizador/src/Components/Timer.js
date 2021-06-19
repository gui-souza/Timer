import { React, Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'
import logo from './cursor.png'
import relogio from './relogio.png'


class Timer extends Component {
    constructor(props) {
        super(props);
        this.soma = 1;
        this.angle = 6;
        this.rodando = false;
        this.timeValue = null
        this.state = {
            value: 60
        }
    }

    countdown() {
        if (this.rodando === false) {
            this.rodando = true;
            this.timeValue = setInterval(() => {
                this.setState({
                    value : this.state.value - this.soma
                }) 
                document.querySelector("#img").style.transform = `rotate(${this.angle}deg)`;
                this.angle = this.angle + 6;
                if (this.state.value <= 0) {
                    clearInterval(this.timeValue);
                    
                }
                }, 1000);
        }   
    }

    stopCount() {
        clearInterval(this.timeValue);
    }

    render () {
        console.log(this.state.value)
        return (
            <div className='buttons'>
                <div className='relogio-completo'>
                    <img className='relogio' src={relogio} alt='aaa'/>
                    <img id='img' className='ponteiro' src={logo} alt='aaa'/>
                </div>              
                <h1>{this.state.value}</h1>
                <Button className='count' variant='success' onClick={() => this.countdown()}>Countdown</Button>
                <Button className='stop' variant='danger' onClick={() => this.stopCount()}>Parar Contagem</Button>
                
            </div>
        )
    }
}

export default Timer;