import { Project } from 'src/project/entity/project.entity';
import { ProjectService } from 'src/project/project.service';
import { Repository } from 'typeorm';
import { EmployeeCreateDTO } from './dto/create-employee.input';
import { Employee } from './entity/employee.entity';
export declare class EmployeeService {
    private employeeRepository;
    private projectService;
    constructor(employeeRepository: Repository<Employee>, projectService: ProjectService);
    findAll(): Promise<Employee[]>;
    findOne(id: string): Promise<Employee>;
    create(employee: EmployeeCreateDTO): Promise<Employee>;
    getProject(id: string): Promise<Project>;
}
