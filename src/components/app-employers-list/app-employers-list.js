import AppEmployersListItem from "../app-employers-list-item/app-employers-list-item";
import './app-employers-list.css';
const AppEmployersList = ({data, onDelete}) =>{

    const elements = data.map( item => {
        const {id, ...itemProps} = item;
        return (
            <AppEmployersListItem key={id}
                                  {...itemProps}
                                  onDelete={() => onDelete(id)}/>
        )
    }) // разобрать

    return(
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default AppEmployersList;