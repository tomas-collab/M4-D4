# M4-D4
Improve your Bookstore!
In this exercise you are gonna update your own book store!
Start from your previous React book store. We want you to give the user the ability to add comments to the books. All users can add comments like a "real" review :)
      
        API INFO:

        You have a CRUD endpoint for comments on:

        https://striveschool-api.herokuapp.com/api/comments/

        This means you can GET, DELETE, POST, PUT data from there.

        The Comment structure is this:

        {
          "comment": "A good book but definitely I don't like many parts of the plot",
          "rate": 3,
          "elementId": "0316438960"
        }

        Where:
        - comment is the text of comment inserted by the user
        - rate is a value between 1 and 5
        - elementId is the ASIN of the book
        - use usual Authentication (grab a new token on https://strive.school/studentlogin if you're previous one is expired)

        !IMPORTANT!
        You have to specify the ElementID / ASIN in the query:

        https://striveschool-api.herokuapp.com/api/comments/{ASIN}

        Doing so, you'll get all the comments for that specific book.

      
    
Create a CommentArea component. When the user clicks on a book, this component should be displayed.

CommentArea component contains the picture of the book, and two subcomponents: CommentsList and AddComment.

CommentsList holds a list of comments about the selected book, the comments array is passed as a prop. Each comment is made by the same SingleComment component.

AddComment contains a form for adding a text comment and a rating (from 1 to 5). This component should allow the user to POST a new Comment on the selected Book

Add, to each "Comment", a button for DELETING it. Create a request towards https://striveschool-api.herokuapp.com/api/comments/{commentId}
Create a Loading component. This loading component should appear on the page when a remote request is ongoing.
Create an error handler for the remote requests. If something goes wrong, an error message should appear!
