@echo off
echo Run Drop Database
call sequelize db:drop
echo Run Create Database
call sequelize db:create
echo Run Migrate Database
call sequelize db:migrate
echo Run Seeding Database
call sequelize db:seed:all
