import { Employee } from "../models/models";
export const employee : Employee[] = [
    {name: 'Наумович Степан Викторович',department: 'IT',salary: 100000 , increase: false, rise: true, id: 1},
    {name: 'Башкирцев Алексей Александрович',department: 'Менеджмент', salary: 60000, increase: true, rise: false, id: 2},
    {name: 'Балакирева Елизавета Антоновна',department: 'Логистика', salary: 85000, increase: false, rise: false, id: 3},
    {name: 'Кийко Максим Владимирович',department: 'Безопасность', salary: 90000, increase: false, rise: false, id: 4},
    {name: 'Насибуллин Тимур Радикович',department: 'IT', salary: 110000, increase: false, rise: false, id: 5},
]

export const deleteItem = (id: number, data: Employee[]) => data.filter(item => item.id !== id)

export const addItem = (name: string, department: string, salary: number): Employee => ({
    name,
    department,
    salary,
    increase: false,
    rise: false,
    id: Date.now(),
})

export const searchEmployeeByName = (term: string, employees: Employee[]): Employee[] => employees.filter(item => item.name.indexOf(term) > -1)

export const filterPost = (items: Employee[], filter: 'rise'| 'moreThan100000') => {
    switch (filter) {
        case 'rise':
            return items.filter(item => item.rise);
        case 'moreThan100000':
            return items.filter(item => item.salary > 100000);
        default: return items
    }
}