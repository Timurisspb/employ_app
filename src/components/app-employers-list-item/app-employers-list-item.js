import { Component } from "react";
import './app-employers-list-item.css';
import AppEmployersList from "../app-employers-list/app-employers-list";


class AppEmployersListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            increase: false
        }
    }

    onIncrease = () => {
        this.setState(({increase}) => ({
            increase: !increase
        }))
    }

    render() {
        const { name, department, salary, experience} = this.props;
        const {increase} = this.state;

        let classNames = "list-group-item d-flex justify-content-between like";
        if (increase) {
            classNames += ' increase';
        }
        return (


            <li className={classNames}>
                <span className="list-group-item-label">{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={department}/>
                <input type="text" className="list-group-item-input" defaultValue={salary + ' p'}/>
                <input type="text" className="list-group-item-input" defaultValue={experience}/>
                <div className="d-flex justify-content-center align-items-center">
                    <button type="button" className="btn-coolie btn-sm"
                            onClick={this.onIncrease}>
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button type="button" className="btn-trash btn-sm">
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>

        )
    }
}

export default AppEmployersListItem;