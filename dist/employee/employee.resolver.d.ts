import { Project } from 'src/project/entity/project.entity';
import { EmployeeCreateDTO } from './dto/create-employee.input';
import { EmployeeService } from './employee.service';
import { Employee } from './entity/employee.entity';
export declare class EmployeeResolver {
    private employeeService;
    constructor(employeeService: EmployeeService);
    findAll(): Promise<Employee[]>;
    create(employee: EmployeeCreateDTO): Promise<Employee>;
    findOne(id: string): Promise<Employee>;
    project(employee: Employee): Promise<Project>;
}
