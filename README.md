# E-commerce Book Store Site
This is the frontend to our unit 4 project. It was made by Steven Laff, Tricia Gray, and Caroline Duffett.

## Explanation of the technologies used
We used React to create this app and its being deployed with Heroku. It has full CRUD capabilities. It also has user authentication for some features of the app. Users can view the books and add them to their carts for checkout. The cart will add up the book prices and let the user know the total owed. They can also remove books added to their cart. We set up a second model for book reviews. All users can read reviews that are left on the books. If a user chooses to create an account, they can post book reviews. We were able to make it so only the user that posted the review can edit and delete it. We also set it so that only admin (staff) accounts can add books, edit books, and delete books. This way users can't mess with the inventory.

For the backend we used Django (for more information checkout our Django backed on GitHub).

## Approach taken
To start, we decided on a topic and planned out wireframes for how we wanted our app to look. Then we set up the backend. Once that was working, we started on the frontend. We got basic CRUD routes for the books working. Then we started making some of the popup modals. Once we got out MVP features done, we started adding in some of our stretch goals. We created a functioning cart, user authentication, and added the second model for reviews. CSS was the last thing we did.

## Links
  GitHub frontend: https://github.com/Caroline-Duffett/ga-bookstore-frontend
  GitHub backend: https://github.com/LaffSteven/ga-project-4-backend
  Heroku app frontend: https://ga-bookstore-frontend.herokuapp.com/
  Heroku app backend: https://ga-bookstore-backend.herokuapp.com/

## Installation Instructions
To view the app, all the user needs to do is open it. If they would like to create an account, they can.

## Unsolved Problems
We would have liked to make the cart persisting and able to add a book more than once. We also would have liked to store orders placed by the users. If we had more time, we were also going to add in a mockup checkout process.

## Sources
https://reactjs.org/docs/context.html
