# SMITTEN README
<br>
## Overview
_**Smitten** is a dating application that is user-friendly but uses unorthodox methods to find love. Users will be able to seek a potential partner through its front-end features.
<br>
## MVP
Smitten's MVP will have a minimalistic design that will be easily navigated throughout it's features. This will include pictures, the ability to make posts seeking potential partners. Other users will also be able to comment on the post and engage in other ways including their biography or fun facts. This app will also be able to demostrate CRUD and be styled using CSS. In addition, it will be deployed through the backend using Heroku.
<br>
### Goals
  Complete backend by Monday Evening 7/13/20
- Complete MVP by Wednesday Evening 7/14/20
- Fully deploy by Friday Evening 7/17/20
- Continue working on CSS and styling throughout the weekend.
- Debug and minor issues remaining 7/20/20 - 7/21/20
- Redploy and present by Wednesday 7/22/20
<br>
### Libraries and Dependencies
> Use this section to list all supporting libraries and dependencies, and their role in the project. Below is an example - this needs to be replaced!
|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       |          _Frontend rendering_              |
|   React Router   |          _Component rendering_             |
|      Ruby        |          _Builds the backend_              |
|      Rails       |          _Backend tables & models_         |
|      Axios       |          _API call management_             |
<br>
#### Wireframes
HOME PAGE:
https://wireframe.cc/cruV7h
Desktop:
https://wireframe.cc/taCabl
https://wireframe.cc/gdUUFj
https://wireframe.cc/kvm9n4
Tablet:
https://wireframe.cc/o39tBb
https://wireframe.cc/7puw0x
https://wireframe.cc/cruV7h
Mobile:
https://wireframe.cc/95PsiX
https://wireframe.cc/fEffOe
https://wireframe.cc/mPDWJ3
#### Component Tree
https://app.lucidchart.com/invitations/accept/e9f33f8b-2b59-435a-a6cb-30e779d3ffbd
#### Component Hierarchy
src
|__ assets/
      |__ icons
      |__ images
|__ components/
      |__ Header
        |__ Header.jsx
        |__ Header.css
      |__ Footer
        |__ Footer.jsx
        |__ Footer.css
|__ pages/
      |__ Homepage
        |__ Homepage.jsx
        |__ Homepage.css
      |__ Login_Register
        |__ Login_Register.jsx
        |__ Login_Register.css
      |__ User_Profile
        |__ User_Profile.jsx
        |__ User_Profile.css
      |__ Smite
        |__ Smite.jsx
        |__ Smite.css
      |__ Post
        |__ Post.jsx
        |__ Post.css
|__ services/
#### Component Breakdown
  Component   |    Type    | State | Props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Header    | functional |   n   |   n   | _The header will contain the navigation and logo._               |
|    Assets       | functional |   n   |   n   | _This component holds images and icons for the website        |
|   Footer     | functional |   y   |   n   | _Footer will contain social media links._                          |
|    Login_Register      | functional |   n   |   n   | _This is the registration page._                    |
|    User_Profile    | functional |   n   |   n   | _This is profile editing page._    |
|    App   | functional |   y   |   y   | _Holds the base of the code including routes_  |
|    CSS pages | functional |   y   |   y   | _These components hold all of the styling for my application.    |
|    Homepage    | functional |   n   |   n   | _This is the home page._               |
#### Time Estimates
| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Backend             |    H     |     10 hrs     |      hrs      |     hrs     |
| Images              |    L     |     4 hrs      |      hrs      |     hrs     |
| User Profile        |    H     |     8 hrs      |      hrs      |     hrs     |
| Matches Page        |    H     |     6 hrs      |      hrs      |     hrs     |
| CRUD                |    H     |     5 hrs      |      hrs      |     hrs     |
| CSS                 |    M     |     4 hrs      |      hrs      |     hrs     |
| Messages Page       |    H     |     5 hrs      |      hrs      |     hrs     |
| Logo                |    L     |     1 hrs      |      hrs      |     hrs     |
| Debugging           |    M     |     3 hrs      |      hrs      |     hrs     |
| Deploy              |    H     |     2 hrs      |      hrs      |     hrs     |
| TOTAL               |          |     48 hrs     |      hrs      |     hrs     |
<br>
### Server (Back End)
#### ERD Model
https://app.lucidchart.com/documents/edit/f04285cc-4a8d-422b-afab-1e231e9092b3?shared=true&
<br>
***
## Post-MVP
Adding in questions to see compatibility percentages between two matches. Would like to add in a global feature where you can match with people from different locations around the world and learn about different cultures. I would like to also add in a game night feature where matches can compete together against other couples that are matched around the area as a virtual "double date".
## Code Showcase
## Code Issues & Resolutions