import React from "react";
import Calculatordisp from "./Calculatordisp";

class Calculator extends React.Component {
    constructor(props) {
        super();
        this.state = {
            result: ""
        }
    }
    calculate = () => {
        try {
            const output = eval (this.state.result);
            this.setState({ result: output });
        }
        catch (event) {
            this.setState({ result: 'error' })
        }
    }

    reset = () => {
        this.setState({
            result: ""
        })
    }

    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    }

    handleclick = (event) => {
        const value = event.target.name;
        switch (value) {
            case 'clear':
                this.setState({ result: '' });
                break;
            case 'equal':
                this.calculate();
                break;
            default:
                this.setState({ result: this.state.result + value });
        }
    }

    render() {
        return (
            <>
                <form>
                    <input type="text" value={this.state.result}></input>
                </form>
                <div className="button">

             
                    <button onClick={this.reset}>REST</button>
                    <button onClick={this.backspace}>BACKSPACE</button><br></br>

                    <button name="1" onClick={this.handleclick}>1</button>
                    <button name="2" onClick={this.handleclick}>2</button>
                    <button name="3" onClick={this.handleclick}>3</button>
                    <button name="+" onClick={this.handleclick}>+</button><br />


                    <button name="4" onClick={this.handleclick}>4</button>
                    <button name="5" onClick={this.handleclick}>5</button>
                    <button name="6" onClick={this.handleclick}>6</button>
                    <button name="-" onClick={this.handleclick}>-</button><br />

                    <button name="7" onClick={this.handleclick}>7</button>
                    <button name="8" onClick={this.handleclick}>8</button>
                    <button name="9" onClick={this.handleclick}>9</button>
                    <button name="*" onClick={this.handleclick}>x</button><br />


                    <button name="." onClick={this.handleclick}>.</button>
                    <button name="0" onClick={this.handleclick}>0</button>
                    <button name="=" onClick={this.handleclick}>=</button>
                    <button name="/" onClick={this.handleclick}>÷</button><br />
                </div>
                <Calculatordisp display={this.state.result}></Calculatordisp>
            </>
        )
    }



}
export default Calculator;
