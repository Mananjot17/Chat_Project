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

#### 1. Endpoint: '/api/auth/signup'
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

#### 2. Endpoint: '/api/auth/login'
  * Description: This endpoint allows users to log in to the application.
  * Method: POST
  * Input:
      * username (String): User's username.
      * password (String): User's password.
  * Output:
      * user (Object): Information about the logged-in user.
  * Logic:
      * Validates input data, finds the user in the database by username, compares the hashed password, generates and sets a JWT token cookie, and returns user information upon successful login.

#### 3. Endpoint: '/api/auth/logout'
  * Description: This endpoint allows users to log out of the application.
  * Method: POST
  * Output:
      * message (String): Confirmation message.
  * Logic:
      * Clears the JWT token cookie and returns a logout confirmation message.

### Message Routes

#### 1. Endpoint: '/api/messages/:id'
  * Description: This endpoint retrieves messages between the logged-in user and another user.
  * Method: GET
  * Input:
      * id (String): ID of the user to retrieve messages for.
  * Output:
      * messages (Array): Array of messages between the users.
  * Logic:
      * Retrieves the conversation between the logged-in user and the specified user, and returns the messages associated with that conversation.

#### 2. Endpoint: '/api/messages/send/:id'
  * Description: This endpoint allows the logged-in user to send a message to another user.
  * Method: POST
  * Input:
      * id (String): ID of the user to send the message to.
      * message (String): Content of the message.
  * Logic:
      * Finds or creates a conversation between the sender and receiver, saves the message to the conversation, emits a socket event to notify the receiver, and returns information about the sent message.

### User Routes

#### 1.  Endpoint: '/api/users'
  * Description: This endpoint retrieves a list of users for the sidebar, excluding the logged-in user.
  * Method: GET
  * Output:
      * users (Array): Array of user objects for the sidebar.
  * Logic:
      * Retrieves users from the database, excluding the logged-in user, and returns the list of users for the sidebar.

### Evvironment Configuration 

  * PORT=5000
  * MONGO_DB_URI = mongodb+srv://mananjotsingh17:mananjotsingh17@cluster0.j0v4hoe.mongodb.net/chat-app-db?retryWrites=true&w=majority&appName=Cluster0
  * JWT_SECRET = akjfckebvuibsrjkskjbkjb
  * NODE_ENV=development


   
 
  

