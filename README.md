<h1 align="center" id="title">CodeNudge</h1>

<p id="description">This project helps LeetCode enthusiasts stay consistent by sending daily email reminders with the LeetCode Problem of the Day (POTD). Every day at noon subscribers receive an email with: A link to the LeetCode POTD The problem’s difficulty level (Easy Medium Hard) The problem’s acceptance rate Emails are sent automatically to keep users on track with their coding practice.</p>

  
  
<h2>🧐 Features</h2>

Here're some of the project's best features:

*   Daily Email Reminders: Automatically sends the POTD link to subscribers at noon each day.
*   Problem Details: Emails include the difficulty level and acceptance rate of the problem to provide quick insights.
*   Easy Subscription: Users can sign up with their email to start receiving daily reminders.

<h2>🛠️ Installation Steps:</h2>

<p>1. Cloning the repo</p>

```
git clone https://github.com/Sundaram-2001/CodeNudge.git
```

<p>2. In the frontend directory (installing dependencies)</p>

```
npm install 
```

<p>3. Running the development server</p>

```
npm run dev
```

<p>4. In the backend directory (installing dependencies)</p>

```
npm i express nodemon  dotenv axios nodemailer handlebars google-auth-library node-cron 
```

<p>5. Running the dev server</p>

```
nodemon server.js
```

<p>6. Environment variables</p>

```
Enter the sender's mail  the clientID , client secret from google cloud console  , the refresh token from the OAuth playground and the app password.
```

  
  
<h2>💻 Built with</h2>

Technologies used in the project:

*   frontend: Sveltekit
*   Node.Js (runtime)
*   Express (web framework)
*   Database : PostgreSQL
*   Leetcode API: https://leetcode.com/graphql
