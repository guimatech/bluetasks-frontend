import { Component } from 'react';
import NavBarItem from './NavBarItem';
import { APP_NAME } from '../constants';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                { id: 1, name: 'Listar Tarefas', href: '/' },
                { id: 2, name: 'Nova Tarefa', href: '/form' },
            ]
        }
    }

    onClickHandler(item) {
        alert(item.name);
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">{APP_NAME}</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                        {this.state.items.map(
                            item => <NavBarItem 
                                        item={item}
                                        key={item.id}
                                        onClick={this.onClickHandler} />)}
                        </ul>
                        </div>
                    </div>
                </nav>
                
            </div>
        );
    }
}

export default NavBar;