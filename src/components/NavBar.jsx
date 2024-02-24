import { Component } from 'react';
import NavBarItem from './NavBarItem';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                { id: 1, name: 'Item 1', href: '/' },
                { id: 2, name: 'Item 2', href: '/' },
                { id: 3, name: 'Item 3', href: '/' },
                { id: 4, name: 'Item 4', href: '/' },
            ]
        }
    }

    render() {
        return (
            <div>
                {this.state.items.map((item) => <NavBarItem key={item.id} name={item.name} />)}
            </div>
        );
    }
}

export default NavBar;