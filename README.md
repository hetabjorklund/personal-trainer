# Personal trainer

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). It fetches data from https://customerrest.herokuapp.com/api.

## Customers
The Customers page shows a list of customers, with the options to add a new customer, delete or edit an existing customer, and add a training to an existing customer.

## Trainings
The Trainings page shows a list of trainings, with the option to delete an existing training.

## Calendar
The Calendar page shows the trainings in a calendar, with the option to change between a month or an agenda view. 

## Statistics
The Statistics page shows the total duration of each activity in minutes.

## Components used
The navigation is done with MUI's [AppBar](https://mui.com/components/app-bar/) and [Tabs](https://mui.com/components/tabs/).

The Customers and Trainings pages use [React Table](https://react-table.tanstack.com/) (version 6) and MUI's [Dialog](https://mui.com/components/dialogs/) and [Button](https://mui.com/components/buttons/) components.

The Calendar is done using [React Big Calendar](https://github.com/jquense/react-big-calendar).

The Statistics page uses the [SimpleBarChart from Recharts](https://recharts.org/en-US/examples/SimpleBarChart) and the sumBy function from [lodash](https://lodash.com/). 

## Creator
Heta Björklund
 * Github: https://github.com/hetabjorklund
 * LinkedIn: https://www.linkedin.com/in/heta-bjorklund
