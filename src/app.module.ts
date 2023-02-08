import { Module } from '@nestjs/common';
import { EmployeeModule } from './employee/employee.module';
import { ProjectModule } from './project/project.module';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';

@Module({
  imports: [EmployeeModule, ProjectModule,GraphQLModule.forRoot(
    {
      autoSchemaFile: join(process.cwd(), 'src/graphql-schema.gql'),
      debug:true ,
      playground:true
    }
  ),
    TypeOrmModule.forRoot({
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
export class AppModule {}
