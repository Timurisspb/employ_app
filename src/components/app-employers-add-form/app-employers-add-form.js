import { Component } from 'react';

import './app-employers-add-form.css'

class AppEmployersAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            department: '',
            salary: '',
            experience: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render() {
        const {name, department, salary, experience} = this.state;

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex">
                    <input type="text"
                           className="form-control new-post-label"
                           placeholder="Как его зовут?"
                           name="name"
                           value={name}
                           onChange={this.onValueChange}/>
                    <input type="text"
                           className="form-control new-post-label"
                           placeholder="Отдел"
                           name="department"
                           value={department}
                           onChange={this.onValueChange}/>
                    <input type="number"
                           className="form-control new-post-label"
                           placeholder="Зарплата"
                           name="salary"
                           value={salary}
                           onChange={this.onValueChange}/>
                    <input type="text"
                           className="form-control new-post-label"
                           placeholder="Стаж"
                           name="experience"
                           value={experience}
                           onChange={this.onValueChange}/>
                    <button type="submit"
                            className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
}

export default AppEmployersAddForm;
