import { Component } from 'react';

import './employees-add-form.css';

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            department: '',
            salary: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        // Можно еще и сообщения добавлять, подсветку, атрибуты minlength и тд.
        if (this.state.name.length < 3 || !this.state.salary) return;
        this.props.onAdd(this.state.name, this.state.department,this.state.salary);
        this.setState({
            name: '',
            department: '',
            salary: ''
        })
    }
    //   валидация для ввода в input
        validate(evt) {
        let theEvent = evt || window.event;
        let key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode( key );
        let regex = /[0-9]|\./;
        if( !regex.test(key) ) {
            theEvent.returnValue = false;
            if(theEvent.preventDefault) theEvent.preventDefault();
        }
    }
    render() {
        const {name, department, salary} = this.state;

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex"
                    onSubmit = {this.onSubmit}>
                    <input type="text"
                           className="form-control new-post-label"
                           placeholder="ФИО:"
                           name="name"

                           value={name}
                           onChange={this.onValueChange}/>
                    <select type="select"
                           className="form-control-s new-post-label"
                           placeholder="Отдел:"
                           name="department"
                           value={department}
                           onChange={this.onValueChange} defaultValue={'IT'}> // не подставляется деффолтное значение при добавлении сотрудника ( исправить ) + стили селекта
                        <option>Отдел:</option>       // исправить
                        <option>Безопасность</option>
                        <option>Менеджмент</option>
                    </select>
                    <input type="number"
                           className="form-control new-post-label"
                           placeholder="Зарплата в  ₽:"
                           name="salary"
                           onkeypress="validate(event)"
                           value={salary}
                           onChange={this.onValueChange}/>

                    <button type="submit"
                            className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;