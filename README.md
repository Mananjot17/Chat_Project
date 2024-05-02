# Chat_Project

## SETUP AND RUN INSTRUCTIONS
  * Clone the Repository: git clone https://github.com/yourusername/project-name.git
  * Navigate to the Project Directory: cd project-name
  * Install Dependencies: npm install
  * Start the Server: npm start

  * The server will start running at http://localhost:5000
  * Access the Application: Once the server is running, you can access the application by opening a web browser and navigating to http://localhost:5000.
  * Shut Down the Server: To stop the server, press Ctrl + C in the terminal where the server is running. Confirm the termination if prompted.

## API ROUTES DESCRIPTIONS
### Auth Routes
#### 1.Endpoint: '/api/auth/signup'
  * Description: This endpoint allows users to sign up for the application.
  * Method: POST
  * Input:
      * fullName (String): Full name of the user.
      * username (String): Unique username for the user.
      * password (String): User's chosen password.
      * confirmPassword (String): Confirmation of the user's password.
      * gender (String): Gender of the user (either "male" or "female").
  * Output:
      * user (Object): Information about the newly signed-up user.
  * Logic:
      * Validates input data, checks if the username is already taken, hashes the password, generates a profile picture URL based on the gender, saves the user data to the database, and returns user information along with a JWT token.
  

