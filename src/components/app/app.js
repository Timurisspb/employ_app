import { Component } from 'react';

import AppInfo from "./app-info/app-info";
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import {deleteItem, addItem, employee, searchEmployeeByName, filterPost} from '../services/services'

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: employee,
            term: '',
            filter: 'all'
        }
        this.maxToShow = 4;
    }

    deleteItem = (id) => {
        this.setState({data: deleteItem(id, this.state.data)
    })
    }

    addItem = (name, department,salary) => {
        this.setState({data: [...this.state.data, addItem(name, department, salary)]});
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
    }

    searchEmp = (items, term) => searchEmployeeByName(term, items)

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    onFilterSelect = (filter) => {
        this.setState({filter});
    }

    render() {
        const {data, term, filter} = this.state;
        const employees = data.length;
        const increased = data.filter(item => item.increase).length; // счетчик сотрудников
        const visibleData = filterPost(this.searchEmp(data, term), filter);

        return (
            <div className="app">
                <AppInfo employees={employees} increased={increased}/>

                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
                </div>

                <EmployeesList
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}/>
                <EmployeesAddForm onAdd={this.addItem}/>
            </div>
        );
    }
}

export default App;