import React from 'react';
import {deprecate} from "@testing-library/jest-dom/dist/utils";

const Table = () => {
    const { name, department, salary, experience} = this.props;
    return (

        <table>
            <thead>
            <tr>
                <th>Заголовок 1</th>
                <th>Заголовок 2</th>
                <th>Заголовок 3</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>{name}</td>
                <td>{department}</td>
                <td>{salary}</td>
                <td>{experience}</td>
            </tr>

            </tbody>
        </table>
    );
};

export default Table;