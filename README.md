# Netflix Assessment MERN

This project is a netflix alike UI webapp with user Authentiction with Node.JS and UI is creted in React.JS. User Credentials are stored in MongoDB Atlas server.
UI is similar to netflix.com with Add To Favorites functionality.
## Utilities

### React.JS for UI and Express.JS for creating server is used.
Plain Vanilla CSS for styling the Components is used. The application is responsive to any desktop,laptop,tablets and few phones.


## Demonstration
- Netflix look alike application with all stationary links and implemented features as asked in the assignment
- User can Sign Up and Sign In from the interface and directly go to home page.
- Home page has the film and movie cards of different genre with its name populated from themoviedatabase api (tmdb api)
- One can Scroll the card via button or via scrolling horizontally.
- Contains Stationary Links with look Alike feature as in Actual Netflix.com
- One Can add a movie to favorite by just clicking on the star of the card and it will be displayed under the Favoites Tab section
- SignOut by on hovering top right caret symbol and clicking "Sign out of Netflix"

## Installation and Usage

1. Clone the repository in a machine:

```https://github.com/ahme1kash/netflix_assessment```

2. Navigate to the Frontend and Backend folder one at a time and type :
   `npm install`
   
3 Run the Application

-Run the application on two separate terminnals with directory /frontend and /backend
- frontend - ```npm run dev```
- backend - ``node index.js``





4 Dependencies
- axios
- dotenv
- mongoose
- cors
- jsonwebtoken
- morgan
- validator
- bcryptjs


6 Installing all dependencies 
 
  - `npm install`





7 - Sample output containg all fields
- ![image](https://github.com/user-attachments/assets/513e544a-b91b-4dad-a42e-9ab81c4fa932)

  
- ![image](https://github.com/user-attachments/assets/51fc6d38-a46d-4b12-a59e-b73f6c40edf9)

  
- ![image](https://github.com/user-attachments/assets/4654d7ee-394b-4e8f-9993-20edc008df38)

  
-![image](https://github.com/user-attachments/assets/a6299243-8134-46db-8635-f4ed7827691e)




8 - ToDos In Future and Experiments

- Add the favorites in local storage so that it persists on browser tab refresh
- Adding Country Page where the country's top movies are listed without any sign in.
- Implementing sessions and cookie based authentication along with token based authentication on local storage(Currently it is token based authentication on Local Storage)
- Using Firebase as a Service for Backend DB and Authentication


