class Prueba extends React.Component {
  state = {
    tasks: ["task 1", "task 2", "task 3"],
  };

  Header = (props) => {
    return (
      <div className="card-header">
        <h1 className="card-header-title header">
          You have {props.numTodos} Todos
        </h1>
      </div>
    );
  };

  render() {
    return (
      <div className="wrapper">
        <div className="card frame">
          <Header numTodos={this.state.tasks.length} />
        </div>
      </div>
    );
  }
}
