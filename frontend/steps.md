1- Sign up
-> creating the user signup page
-> creating the user model
-> Process of registering the user
2- Log in
-> creating the user login page
-> process of logging in the user
3- manage users
-> A page for showing all the user

-> change user from unpaid to paid
-> can give user their roles
-> update user credintials
-> delete user
->
user-list page
email,
paid or unpaid
isadmin
edit button
delete button
Quiz-questions:
[
{
options: [],
answers: [],
}
]

first make a quiz
add questionsto related quiz
Quiz table:
submissions, quiz name, quiz descriptions, quiz status, edit, delete

Quiz-creation-page->
-> first create a form to add quiz name
-> quiz description
-> paid or free a
-> add a form to upload image
-> quistions
-> answers
send the image file to the backend
create a quiz with two question
make the quiz page
check the correct answer
to check the correct answer i need to data
answersarray
question options that are checked
next we have to loop through the filtered options array
show the score
prepare individual quiz page
ready all quiz place
->
quiz card
1)quiz name
2)quiz picture
3)number of user who took this quiz
4)Link for going to the quiz page

first setup the timer properly
then retake

how i should check retake ?

should have a retake button which should start the quiz again
after submitting all the question or after the timer gets ended your Question component will not be shown and
retake button will be shown if there is number of retake left;
if no retake left then that should be on the screen
retake done
show answer as they submit the question
to do that what is the first step
-> At first have to create individual answer element
-> then I have to make show answer to true after submission is done
tonight ->
first - Authentication
second - quiz managing
third - user data
fourth - quiz data
const POSTS_URL = process.env.NEXT_PUBLIC_BACKEND_API;
number of submissions
I need to the get the number of users associated with every quiz
adding the image properly
