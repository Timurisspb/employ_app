
import './app-employers-add-form.css';
const AppEmployersAddForm = () =>{
    return(
        <div className="app-add-form">
            <h3>Добавить нового сотрудника</h3>
            <form className="add-form d-flex">
                <input type="text" className="form-control new-post-label" placeholder="ФИО:"/>
                <input type="text" className="form-control new-post-label" placeholder="Отдел:"/>
                <input type="text" className="form-control new-post-label" placeholder="Зарплата:"/>
                <select type="text" className="form-control new-post-label" placeholder="Стаж:">
                    <option>Стажер</option>
                    <option>Менее Года</option>
                    <option>От года</option>
                    <option>Более 3 лет</option>
                </select>

                <button type="button" className="btn btn-outline-light">Добавить</button>
            </form>
        </div>
    )
}
export default AppEmployersAddForm;