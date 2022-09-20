/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from "@ioc:Adonis/Core/Route";

Route.post("/users/register", "UsersController.registerUser");
Route.get("/users/getallusers", "UsersController.getAllUser");
Route.get("/users/:id", "UsersController.getUser");
Route.get("/user", "UsersController.getAuthenticateduser");
Route.post("/users/login", "UsersController.login");
Route.put("/users/updateusers/:id", "UsersController.updateUser");
Route.delete("/users/deleteuser/:id", "UsersController.deleteUser");
Route.delete("/quizes/deleteQuiz/:id", "QuizzesController.deleteQuiz");
Route.post("/quiz", "QuizzesController.createQuiz");
Route.get("/quiz", "QuizzesController.getallquiz");
Route.get("/quiz/:id", "QuizzesController.getSingleQuiz");
Route.put("/quizes/updateQuiz", "QuizzesController.updateQuiz");
Route.post("/quiz/:id/questions", "QuizzesController.addQuestion");
Route.get("/questions/:qid/:uid", "QuizzesController.getrelatedQuestions");
Route.get("/user/:id/quizes", "UsersController.getrelatedQuizes");
Route.post("/user/:id/quizes/:quizid", "UsersController.makerelatedQuiz");
Route.post("/quiz/image", "QuizzesController.showImage");
