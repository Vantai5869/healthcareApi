"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const employee_module_1 = require("./employee/employee.module");
const project_module_1 = require("./project/project.module");
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("@nestjs/typeorm");
const path_1 = require("path");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [employee_module_1.EmployeeModule, project_module_1.ProjectModule, graphql_1.GraphQLModule.forRoot({
                autoSchemaFile: (0, path_1.join)(process.cwd(), 'src/graphql-schema.gql')
            }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'db.bmrtwyybihlfxckhrssz.supabase.co',
                port: 5432,
                username: 'postgres',
                password: 'DbTaipv2202*',
                database: 'postgres',
                entities: ["dist/**/*.entity{.ts,.js}"],
                synchronize: true,
            }),],
        controllers: [],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map