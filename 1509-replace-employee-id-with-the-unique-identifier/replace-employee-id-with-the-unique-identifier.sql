# Write your MySQL query statement below

# select EmployeeUNI.unique_id, Employees.name from Employees left join EmployeeUNI on Employees.id = EmployeeUNI.id

# Using Alias

select eu.unique_id, e.name from Employees as e left join EmployeeUNI as eu on e.id = eu.id