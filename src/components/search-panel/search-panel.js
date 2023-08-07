import { Component } from 'react';
import './search-panel.css';
import jss from "jss";
import preset from "jss-preset-default";
import AppFilter from "../app-filter/app-filter";

jss.setup(preset());

export const styles = {
    search_panel: `
    margin-top: 30px;
    padding: 25px;
    background-color: #3d5a80;
    border-radius: 4px;
    box-shadow: 15px 15px 30px rgba(0,0,0, .15);
    color: #fff;`
}

const {classes} = jss.createStyleSheet(styles).attach()
class SearchPanel extends Component {

    constructor(props) {
        super(props);
        this.filter = props.filter;
        this.onFilterSelect = props.onFilterSelect;
        this.state = {
            term: ''
        }
    }

    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term)
    }

    render() {
        return (
        <div className={classes.search_panel}>
            <input type="text"
                   className="form-control search-input"
                   placeholder="Найти сотрудника:"
                   value={this.state.term}
                   onChange={this.onUpdateSearch}/>
            <AppFilter filter={this.filter} onFilterSelect={this.onFilterSelect}/>
        </div>
        )
    }
}

export default SearchPanel;
