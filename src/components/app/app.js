import {Component} from "react";

import AppInfo from "../app-info/app-info";
import AppSearch from "../app-search/app-search";
import AppFilter from "../app-filter/app-filter";
import AppEmployersAddForm from "../app-employers-add-form/app-employers-add-form";
import AppEmployersList from "../app-employers-list/app-employers-list";
import  './app.css';
class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data: [
        {name: 'Миронов Василий Викторович', department:'Безопасность', salary: 100000, experience: '3 года', increase: true, id: 1},
        {name: 'Наумович Степан Михайлович', department:'Менеджмент', salary: 140000, experience: '5 лет', increase: false, id: 2},
        {name: 'Комов Кирилл Владимирович', department:'Логистика', salary: 23000, experience: '1 год', increase: false, id: 3},
        {name: 'Насибуллин Тимур Радикович', department:'IT', salary: 100, experience: 'Стажер', increase: false, id: 4},
                ]
        }
    }

    deleteItem = (id) =>{
        this.setState(({data}) =>{
            const index = data.findIndex(elem => elem.id === id);// Ищем нужный object - вставляем элемент и будем сравнивать id с уникальным id

        })
    }
        render(){
            return(
            <div className="app">
                <AppInfo/>

                <div className="app-search">
                    <AppSearch/>
                    <AppFilter/>

                </div>

                <AppEmployersList data={this.state.data} onDelete={this.deleteItem}/>
                <AppEmployersAddForm/>
            </div>
        );
        }

}
export default App;