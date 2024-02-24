import { Component } from 'react';

class TaskListTable extends Component {
    render() {
        return (
            <div>
                <table className="table table-hover">
                    <TableHeader />
                    <TableBody />
                </table>
            </div>
        );
    }
}

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Status</th>
                <th>Descrição</th>
                <th>Data</th>
                <th>Ações</th>
            </tr>
        </thead>
    );
}

const TableBody = () => {
    return (
        <tbody>
            <tr>
                <td>Concluído</td>
                <td>Estudar React</td>
                <td>2021-10-01</td>
                <td>
                    <button className="btn btn-success">Editar</button>
                    <button className="btn btn-danger">Excluir</button>
                </td>
            </tr>
        </tbody>
    );
}

export default TaskListTable;