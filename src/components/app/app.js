import AppInfo from "../app-info/app-info";
import AppSearch from "../app-search/app-search";
import AppFilter from "../app-filter/app-filter";
import AppEmployersAddForm from "../app-employers-add-form/app-employers-add-form";
import AppEmployersList from "../app-employers-list/app-employers-list";
import Table from "../../dr"
import  './app.css';
function App(){

    const data = [
        {name: 'Миронов Василий Викторович', department:'Безопасность', salary: 100000, experience: '3 года', increase: true},
        {name: 'Наумович Степан Михайлович', department:'Менеджмент', salary: 100000, experience: '5 лет', increase: false},
        {name: 'Комов Кирилл Владимирович', department:'Логистика', salary: 100000, experience: '1 год', increase: false},
        {name: 'Насибуллин Тимур Радикович', department:'IT', salary: 0, experience: 'Стажер', increase: false},
    ]

    return(
        <div className="app">
        <AppInfo/>

            <div className="app-search">
                <AppSearch/>
                <AppFilter/>

            </div>
            <Table/>
            <AppEmployersList data={data}/>
            <AppEmployersAddForm/>
        </div>
    );
}
export default App;