# Angular Test

### This is an angular project for a 45 min test with the following tasks:
1. create a modal component


2. show only people with priority more than 500 from the list:
   - name: "Johny Montana", priority: 5000;
   - name: "James Adam", priority: 100;
   - name: "Lowis Panini", priority: 3500;
   

3. create the following routes:
   - create - this route can be accessed only by logged users; 
   - edit/:id - this route can be accessed only by logged users; 
   - delete/:id - this route can be accessed only by logged users; 
   - list - this route can access all users; 
   - detail/:id - this route can be accessed by all users;

### My solution:
1. Modal component:
   - route: http://localhost:4200/ex1
   - a modal component that can be opened or closed using modal service and uses ng-content to display title on top and the rest of content at the bottom;
   - modal service is a service with a public field display of type BehaviorSubject<boolean> and 2 function for closing and opening (set the next value false and true);
   - a form component that uses modal component and title selector for ng content
   - home component - a page where we use form component


2. Filter by priority:
   - route: http://localhost:4200/ex2
   - card component that displays the name and the priority;
   - priority pipe witch removes from the array the items with priority less or equal with 500;



3. Filter by priority:

    - routes: 
      - http://localhost:4200/ex3/list;
      - http://localhost:4200/ex3/detail/1
      - http://localhost:4200/ex3/create
      - http://localhost:4200/ex3/delete/1
      - http://localhost:4200/ex3/edit/1

    - auth service has one field of type BehaviourSubject<boolean> and 3 function (login, logout, isAuthenticated); 
    - auth guard witch allow to access the route only if the user is authenticated;
    - create, delete, edit pages;
    - list and detail page with button for login or logout;

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.
