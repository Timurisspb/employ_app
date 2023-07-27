import {Employee} from "../models/models";
import React from "react";

export interface EmployeeListProps {
    data: Employee[];
    onDelete: (id: number) => void;
    onToggleProp: (id: number, target: string) => void;
}