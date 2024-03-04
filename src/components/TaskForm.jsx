import { Component } from 'react';

class TaskForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            task: {
                id: 0,
                description: "",
                whenToDo: ""
            }
        }

        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onInputChangeHandler = this.onInputChangeHandler.bind(this)
    }

    onSubmitHandler(event)  {
        event.preventDefault();
    }

    onInputChangeHandler(event) {
        const field = event.target.name;
        const value = event.target.value;

        this.setState(prevState => ({ task: { ...prevState.task, [field]: value } }))
    }

    render() {
        return (
            <div>
                <h1>Cadastro de tarefas</h1>
                <form onSubmit={this.onSubmitHandler}>
                    <div className="form-group">
                        <label htmlFor="description">Descrição</label>
                        <input type="text"
                            className="form-control"
                            name="description"
                            placeholder="Digite a descrição"
                            onChange={this.onInputChangeHandler} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="whenToDo">Data</label>
                        <input type="date"
                            className="form-control"
                            name="whenToDo"
                            placeholder="Digite a descrição"
                            onChange={this.onInputChangeHandler} />
                    </div>
                    <div className="mt-2">
                        <button type="submit" className="btn btn-primary">Cadastrar</button>
                        <button type="button" className="ms-1 btn btn-primary">Cancelar</button>
                    </div>
                </form>
            </div>
        );
    }
}
export default TaskForm;
