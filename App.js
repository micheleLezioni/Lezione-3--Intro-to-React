import React from "react";
import "./App.css";
import Age from "./components/Age";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nome: "",
      lavoro: "",
      age: 15
    };
  }

  componentDidMount = () => {
    this.setState({
      //UNICO MODO PER CAMBIARE LO STATE INTERNO DI UN CLASS COMPONENT
      nome: this.props.nome,
      lavoro: this.props.lavoro
    });
  };

  handleIncrement = () => {
    this.setState({ age: this.state.age + 1 });
  };

  render() {
    return (
      <>
        <div className="App">
          <header className="App-header">
            <p>
              {/*    CONDITIONAL RENDERING 
              {this.state.nome !== undefined
                ? `Il mio nome è ${this.state.nome}` //backticks
                : "UNDEFINED"} */}
              {`Il mio nome è ${this.props.nome}`}
            </p>
            <button className="increment" onClick={this.handleIncrement}>
              +
            </button>
            <button //COME INSERIRE UNO STILE INLINE
              style={{
                fontSize: "20px",
                padding: "10px 15px",
                margin: "5px",
                fontWeight: "600",
                cursor: "pointer",
                display: "inline"
              }}
              /* EVENTO ONCLICK */
              onClick={() => this.setState({ age: this.state.age - 1 })}
            >
              -
            </button>

            {/* CONDITIONAL RENDERING, RENDERIZZIAMO UN COMPONENT SOLO SE UNA CONDIZIONE è SODDISFATTA */}
            {this.state.age >= 18 && <Age age={this.state.age} />}
            {this.state.age < 18 && "Sono troppo piccolo per guidare"}
            <p>{`Lavoro presso ${this.state.lavoro}`}</p>
          </header>
        </div>
        <div>ciao</div>
      </>
    );
  }
}

export default App;
