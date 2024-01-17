# Node Express Example Project

## Description

This is a very small project that demonstrates a node.js express framework backend that follows the MVC (model, view, controller) design paradigm. It utilizes EJS for html rendering as well. 

Follow the steps below to start it up.

## Setup initial project

1. Clone the repository:

git clone https://github.com/yourusername/yourproject.git

2. Navigate into the project directory:

cd yourproject

3. Install the dependencies:

npm install

## Setup Database

You will need to first setup your database on your local machine for demo purposes. 

1. Login to mysql workbench
2. You should see the environment that was setup when you installed it.

![mysql login](./images/mysqllogin.PNG)

3. record the port. The host should be 'localhost' and user 'root'. If its different, just record whtaever it is. You will need your password as well.

4. go to the database folder, copy the 'Dump20240117' sql to the clipboard.

5. login to your database on local host. Start a new query and paste the data from the database file.

6. Run the query, this should setup your db. Confirm that 'customers' database was created and some users are in it ("SELECT * FROM customers.customers;").

7. go to the file db.js, you will see you the login info is reverencing a .env file. You need this file so that you can hide your login details in database so we never show it on the repository (people will steal it).

8. go to the .env.example file. this is a file i made showing how the file should be setup.

9. create a .env file (just name it like that, .env) in your root directory. copy paste the example contents but put in your password and update other info if needed, including the port.

NOTE: you can lookup what .env file is for but make sure you add its included in gitignore ( I did add it by default but double check). you never want to commit the .env file to the repository because those are secret fields.

## Start the server

Now you are ready to start. 

npm start

it should start the server on your https://localhost:3000. If needed you can change the port in app.js.

##Questions????
Contact me if you have any questions at all about the code or how it works.
