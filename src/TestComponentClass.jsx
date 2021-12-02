
import React from 'react';


class TestComponentClass extends React.Component {
    state = {
        counter: 0,
        color: "red",
        age: 15
    }
    hendleClick = () => {
        const { counter } = this.state;
        this.setState({ counter: counter + 1 })
        this.setState((prevState) => {
            counter: return (prevState.counter + 1)
        }
        )
    }

    hendleClickMin = () => {
        const { counter } = this.state;
        this.setState({ counter: counter - 1 })
        this.setState((prevState) => {
            counter: return (prevState.counter - 1)
        }
        )
    }
    render() {
        const { counter } = this.state;
        let name = "Sveta";


        return (<>
            <h1>{name}</h1>
            <button onClick={this.hendleClick}>Update count</button>
            <button onClick={this.hendleClickMin}>Update count</button>
            <p> Test Class component {counter}</p>
        </>)
    }
}
export default TestComponentClass;