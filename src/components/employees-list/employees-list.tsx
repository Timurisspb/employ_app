import EmployeesListItem from "../employees-list-item/employees-list-item";
import React from "react";
import './employees-list.css';
import {EmployeeListProps} from "./employee-list.types";

const EmployeesList: React.FC<EmployeeListProps> = ({data, onDelete, onToggleProp}) => (
        <ul className="app-list list-group">
            {data?.map(item => {
                const {id, ...itemProps} = item;
                return (
                    <EmployeesListItem
                        key={id}
                        {...itemProps}
                        onDelete={() => onDelete(id)}
                        onToggleProp={(e: React.ChangeEvent) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}/>
                )
            })}
        </ul>
    )
export default EmployeesList;