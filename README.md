# Power User

[![dependencies Status](https://david-dm.org/albertyu1027/PowerUser/status.svg)](https://david-dm.org/albertyu1027/PowerUser)

## Table of Contents

[Purpose and Value](#purpose-and-value)<br />
[Project Deliverables](#project-deliverables)<br />
[Starting App Locally](#starting-the-app-locally)<br />
[Deployment](#deployment)<br />
[How To Get Started](#how-to-get-started)<br />

## Purpose and Value

**Purpose**: Reduce energy costs through continuous monitoring and baseline comparisons with friends

**Value**: Provide environmentally conscious consumers a tool to maintain awareness of power consumption

## Project Mock-Up

[UI mock-up on Figma](https://www.figma.com/file/G8MpnNnitPiCGptAVdmXiZUz/Power-User)

[Project Management on AirTable](https://airtable.com/shrzxX9mCGg3EONkc/tblQ3GATbXly6c342)

## Project Deliverables

### UI Mock-up

[Figma](https://www.figma.com/file/G8MpnNnitPiCGptAVdmXiZUz/Power-User)

### Project Management on AirTable

[Assigned Tasks](https://airtable.com/shrzxX9mCGg3EONkc/tblQ3GATbXly6c342)<br />
[Due Dates calendar view](https://airtable.com/shrCMTMPGnggWSeEo)<br />
[Status Kanban](https://airtable.com/shrnQGYnws5jOAAsY)

## Starting the app locally

Start by installing front and backend dependencies. While in this directory, run the following commands:

```
yarn install
cd client
yarn install
cd ..
```

After both installations complete, run the following command in your terminal:

```
yarn start
```

## Deployment

Create a new build from the root directory of your local environment

```
cd client
yarn build
```

After Webpack has completed the build, commit the new build files to the repo and push to Heroku.

```
cd ..
git add .
git commit -m "..."
git push heroku master
```

If you want to push a different branch to Heroku, change the last command to the following:

```bash
### name_of_branch should be the name of the branch you want to push to Heroku.
git push heroku name_of_branch:master
```

## How To Get Started

### Sign Up For An Account:

   <br />

   ![sign up](https://i.imgur.com/XQtHlb3.png)

### Log In To Your Account:

   <br />
   
   ![login](https://i.imgur.com/l5ry3Np.png)

### Navigate To Your Upload Page And Upload Your CSV Data (click the information button at the bottom for instructions):

   <br />
   
   ![uploads](https://i.imgur.com/E4vfa0S.png)
    


### Compete With Your Friends:

   <br />

![compete with friends](https://i.imgur.com/SNUvumZ.png)
