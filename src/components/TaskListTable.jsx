import { Component } from 'react';
import TaskService from '../api/TaskService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class TaskListTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        };

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onStatusChangeHandler = this.onStatusChangeHandler.bind(this);
    }

    componentDidMount() {
        this.listTasks();
    }

    listTasks() {
        this.setState({ tasks: TaskService.list() });
    }

    onDeleteHandler(id) {
        if (!confirm('Deseja excluir a tarefa?')) return;
        TaskService.delete(id);
        this.listTasks();
        toast.success('Tarefa excluída com sucesso!', { position: "bottom-left" });
    }

    onStatusChangeHandler(task) {
        task.done = !task.done;
        TaskService.save(task);
        this.listTasks();
    }

    render() {
        return (
            <>
                <table className="table table-striped">
                    <TableHeader />
                    {this.state.tasks.length > 0 ? <TableBody 
                        tasks={this.state.tasks}
                        onDelete={this.onDeleteHandler} 
                        onStatusChange={this.onStatusChangeHandler}/> 
                        : <EmptyTableBody />}
                </table>
                <ToastContainer autoClose={1500} />
            </>
        );
    }
}

const TableHeader = () => {
    return (
        <thead className='table-dark'>
            <tr>
                <th scope='col'>Status</th>
                <th scope='col'>Descrição</th>
                <th scope='col'>Data</th>
                <th scope='col'>Ações</th>
            </tr>
        </thead>
    );
}

const TableBody = (props) => {
    return (
        <tbody>
            {props.tasks.map(task => 
                <tr key={task.id}>
                <td>
                    <input type='checkbox'
                        checked={task.done}
                        onChange={() => props.onStatusChange(task)} /></td>
                <td>{ task.done ? <s>{task.description}</s> : task.description }</td>
                <td>{ task.done ? <s>{task.whenToDo}</s> : task.whenToDo }</td>
                <td>
                    <input type='button' className="btn btn-success" value="Editar" />
                    <input 
                        type='button' 
                        className="ms-1 btn btn-danger" 
                        value="Excluir"
                        onClick={() => props.onDelete(task.id)} />
                </td>
            </tr>
            )}
        </tbody>
    );
}

const EmptyTableBody = (props) => {
    return (
        <tbody>
            <tr>
                <td colSpan='4'>Nenhuma tarefa cadastrada.</td>
            </tr>
        </tbody>
    );
}

export default TaskListTable;
