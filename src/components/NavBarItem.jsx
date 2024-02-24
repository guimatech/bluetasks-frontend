import { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBarItem extends Component {
    render() {
        return (
            <div>
                <li className="nav-item">
                    <Link
                    aria-current="page" 
                    className="nav-link active" 
                    to={this.props.item.href} 
                    onClick={() => this.props.onClick(this.props.item)}>
                        { this.props.item.name }
                    </Link>
                </li>
            </div>
        );
    }
}

export default NavBarItem;