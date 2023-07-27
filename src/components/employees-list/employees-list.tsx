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

type objectType = Record<string, number | string>
interface example {
    id?: string,
    name: string,
    salary: number,
    fio: string,
    address?: string;
    1: number;
    [key: string]: string|number;
}
type evoidExId = Pick<Partial<example>, 'name' | 'salary'>
type es = Pick<Required<example>, 'address' | 'id' | 'phone'>

type split = Partial<Required<evoidExId & es>>

type splm = split &  Pick<example, 'fio'>

const obj: o = {phone: 8757648, name: 'Ygagdf'};
type o = Record<string, number | string>
const ong: i = {54: 'hfhfgf', phone: 7556}
type i = Record<string|number, string | number>
const objj: s = {[Symbol(1)]: 7, phone: 8757648, name: 'Ygagdf'}
type s = Record<symbol | string, string | number  >
type f = Omit<example, 'address'> // Pick | Omit

export default EmployeesList;