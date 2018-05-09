[User Questionnaire](https://docs.google.com/forms/d/e/1FAIpQLSfNt0ryr1q3mLQcXbRfFuX9RgDqpTFxu4SP_f930plEKo0ubg/viewform)

# Well-Bean App
App to create a healthier lifestyle and routine in a community driven platform

## Description

### Team Roles
* Phat - UI/UX designer (Po)
* Isaac - DevOps (Laa-Laa)
* Haydn - QA developer (Dipsy)
* Nico - Scrum master (TinkyWinky)

## App Walkthrough

### Problem Statement

General user needs to complete daily challenges so that they can improve their resilience and stay motivated.

### User Journeys

#### The user can view a list of challenges, see more details, opt-in then complete or opt-out a challenge.
User Stories:
* [ ]User can view challenges.
* [ ]User can select a challenge and see more details.
* [ ]User can opt-in to a challenge.
* [ ]User can mark a challenge as complete
* [ ]User can opt-out of a challenge if they want.

#### User can create an account or login to the app.
User Stories:
* [ ]User can login to the app.
* [ ]A new user can sign-up to the app.

#### User can easily navigate to other pages in the app.
User Stories:
* [ ]User can get to Inspire page from all other pages.
* [ ]User can get to Challenges page from all other pages.
* [ ]User can get to Home page from all other pages.
* [ ]User can get to Stats page from all other pages.

#### User can see a feed of positive messages.
User Stories:
* [ ]Each user can read other users' messages.
* [ ]User can see who is the author of each message

#### User can submit new messages or challenges.
User Stories:
* [ ]User can write a message if desired.
* [ ]Users can create challenges that follow the S.M.A.R.T pattern. (Specific, Measurable, Attainable, Relevant and Timely).

#### User can see latest message, 10 latest challenges or current challenge all in one home page.
User stories:
* [ ]User can see latest inspirational message on home page.
* [ ]User can see 10 latest challenges in a carousel on home page.
* [ ]User can see their current challenge on the home page.

#### User can view their progress.
User Stories:
* [ ]User can track their progress in one place.

#### User can report messages or challenges.
User Stories:
* [ ]User can report or provide feedback on a challenge.
* [ ]They can report a messages that do not comply with the ethos of the app.

## Git Flow

 - assign yourself to an issue and add `in-progress` label 
 - start work on issue
 - commit work referencing issue
 - create a pull request
     - reference issue
     - add description of work completed
     - `assign` all of your team
     - if you are still working on the PR add [WIP] to the title (work in progress)
- __everybody__ in the team reviews the PR - **IMPORTANT!!!**
- the creator of the PR should respond to all the questions and/or make changes requested (or say why don't want to change has to be a good reason)
- the final team member to review should `assign` the QA and add `awaiting-review` label
- the QA will review and reassign the creator of the PR and unassign themself
- this step repeats until the PR can be merged :twisted_rightwards_arrows: and the branch deleted :x:

## Environment

### scripts
    "start": "node src/index.js",
    "dev": "nodemon src/index.js"
    "test": "NODE_ENV=test nyc nodemon src/tests/*.test.js | tap-spec",
    "build": "node src/model/database/db_build.js"

### Dependencies
- express
- express-handlebars
- cookie-session
- bcryptjs
- body-parser
- pg-promise
- babel
- serve-favicon
- dot-env

### Dev-Dependecies
- tape
- tap-spec
- supertest
- nyc
- nodemon
- eslint
- eslint-config-airbnb-base

### Deployment
- Heroku
- Travis

### Databases
- Production: Heroku
- Testing: Heroku
- Development: Local

## How to run/set up local environment

## Prototype Flow
[Figma prototype](https://www.figma.com/file/JqtTX7hSQDNm6bezlf6w9SnE/Be-Well?node-id=80%3A169)

## Tech Stack

* Express
* Handlebars
* PostgreSQL or MongoDB
* Tape
* Supertest
* Travis
* Babel
* Sass

## Lessons and Learning

### Research Learning Spiral

#### Objectives

#### Who am I designing for?
 - Those suffering from addiction, looking to improve
 - People looking to develop a healthy daily routine
 - People who want to be involved in a positive community driven platform
 - Those who want to set daily challenges
 - People who want to participate in an anonymous social network
 
 #### What kinds of goals will those individuals be accomplishing as they use your product/service?
 - Stopping an addiction/bad habit
 - Building confidence
 - Developing a daily routine they commit to
 - Feel accomplishment in helping and contributing for others
 - Satisfaction in completing and creating challenges for others
 
 #### When will those people be engaging with your product?
 - Initiate, when looking to make a lifestyle change
 - Daily basis/ routine check
 - When challenges are complete
 - When you want to share postivity
 
 #### Where will those people be using what you are designing?
 - Smartphone focused
 - In quiet time / personal time
 - Mobile, use wherever comfortable
 
 #### Why are those people choosing to use what you’ve designed (and not something else) and what drives this behavior?
 - Anonymous
 - Positive community
 - We provide daily challenges
 - Community moderation

#### How will they be using it?
- Complete daily challenges
- Track accomplishments
- Share thoughts 

### Hypotheses
In a few bullet points, by building this app, what are you looking to prove?
- A positive community can be created
- Healthy changes can be made from daily routine
- Help others indirectly

### User Journey Flow Chart

![Flow Chart](https://github.com/fac-13/BeWell/blob/master/BeWell.svg)


 
