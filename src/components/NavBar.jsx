import { Component } from 'react';
import NavBarItem from './NavBarItem';
import { APP_NAME } from '../constants';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                { name: 'Listar Tarefas', href: '/', active: true },
                { name: 'Nova Tarefa', href: '/form', active: false },
            ]
        }

        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onClickHandler(item) {
        const items = [...this.state.items];
        items.forEach(item => item.active = false);
        item.active = true;

        this.setState({ items })
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">{APP_NAME}</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                        {this.state.items.map(
                            item => <NavBarItem 
                                        item={item}
                                        key={item.name}
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