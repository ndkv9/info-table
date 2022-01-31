### About the App

All the data in the app is mocked as an API inside lib folder

All the scripts for starting, developing, and testing can be found from package.json

To run the app, all dependencies need to be installed with npm install/ yarn

### Run the app

Make sure NodeJS is on your machine

Install dependencies: `npm install` or `yarn`

Run the app: `npm start` or `yarn start`

### App's features

- ⚡Display two separate tables for Users and Projects history with data from mock API
- ⚡Handle loading state: at the begining the app will implement the first load for both tables, then users can load more data by clicking loading button for each table
- ⚡The progress circular will be visible on loading state
- ⚡Handle error state: every second call on the API the app will display with an error message to inform for its users
- ⚡The app using Material UI components base, and can be responsive on different devices
- ⚡The app can display the data in desc (newest first) as default
- ⚡The sorting function can be toggled by clicking on Date field only
- ⚡The sorting order will not change after loading more data
- ⚡The app will display an message when all data retrieved

### Testing

- There are two testing method applied for the app: unit test with Enzyme & Jest and e2e test with Cypress
- The unit test will cover all basic functionalities of the component
- Testing on loading, error handling, and sorting will be implemented with e2e tests
- Cypress supposes that the application is up when it start to test the app (can be done with npm/yarn start)
- Cypress offers a straighforward way that can be followed by opening it testing browser (npm/yarn run cypress:open)
