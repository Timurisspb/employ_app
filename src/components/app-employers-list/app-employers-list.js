import AppEmployersListItem from "../app-employers-list-item/app-employers-list-item";
import './app-employers-list.css';
const AppEmployersList = ({data}) =>{

    const elements = data.map( item => {
        return (
            <AppEmployersListItem {...item}/>
        )
    }) // разобрать

    return(
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default AppEmployersList;