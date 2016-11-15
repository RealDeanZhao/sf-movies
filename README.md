# sf-movies
This is only for the client side and the server side repository is [here](https://github.com/zestxjest/sf-movies-server).

I am not good at CSS, the UI may not be beautiful and user friendly.

## Requirement
Create a service that shows on a map where movies have been filmed in San Francisco. The
user should be able to filter the view using autocompletion search.

## Business Analysis
1. Show the movies on the map with the custom map markers.
2. A movie list will be shown on the sidebar of the application.
2. The movie list should be paginated.
3. The user can search the movies by the title. It supports fuzzy search.

## Some snapshots of the app:
![image](https://github.com/zestxjest/sf-movies/Pagination.jpg)

![image](https://github.com/zestxjest/sf-movies/SearchByTitle.jpg)

## Technical Design
### Programming Language
* Javascript

### Environment
* Ubuntu

### Frontend Tech 
* React
* Redux
* Google Map for React

### Project Structure
**MAP/**: The google map component wrapper.

**MovieList/**: The component to show the movie list.

**Searchbox/**: The component to search the movies from the backend.

**Sidebar/**: The component that wrapper the MovieList and the Searchbox.

**redux/**: The folder contains some basic configuration for Redux such as the stores, the actions and the reducers.

**App.js**: The main application page.

**index.js**: The root that wraps the react redux provider.

### Run
```
// Install all the dependencies.
➜  sf-movies git:(master) ✗ npm install

// Then start the node server, it will listen to port 3001.
➜  sf-movies git:(master) ✗ npm start
```
