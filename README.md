# Project "Post" 📝📊📚

View the project: [Post App](https://post-beta.vercel.app/)

## Used Technologies ⚙️:
- Next.js
- TypeScript
- Tailwind CSS
- Redux Toolkit + RTK Query
- tsParticles library
- Jest

## About the Project 💻
Designed to showcase the functionality of infinite scrolling, routing, data fetching, and search based on an external API with posts. The project is covered with unit tests using Jest.

## Functionality:

- Infinite scrolling:
    - Created a page where posts from an external data source are displayed.
    - Implemented infinite scrolling (loading additional data when clicking the button).
    - Initially loads only the latest 8 posts, then another 8 and so on.
- Routing + data fetching:
    - When clicking on the post title or image, users are redirected to the "Post Details" page.
- Search:
    - Added a search bar at the top of the application.
    - Search returns a list of posts where the query matches the author's name or post content.
    - Search optimization: data is fetched only after 500 ms of user inactivity.
