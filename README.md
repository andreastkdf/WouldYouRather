# Would You Rather? Project

![copyright](https://img.shields.io/badge/%C2%A9%202019-Andrea%20Kostakis-blue.svg)
![license](https://img.shields.io/badge/license-MIT-brightgreen.svg)

### Second project to submit for Udacity React Nanodegree Program.

A web app that lets a user play the “Would You Rather?” game.
The game goes like this:

A user is asked a question in the form: “Would you rather [option A] or [option B] ?”. 
Answering "neither" or "both" is against the rules.

In the app, users are able to answer questions, see which questions they haven’t answered, see how other people have voted, post questions, and see the ranking of users on the leaderboard.
A login feature is available, the users are able to login by selecting one of the available accounts.

# Usage
### Install [yarn](https://yarnpkg.com):  
* macOS : 

```bash 
brew install yarn
```
* Linux : 
```bash
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list

sudo apt-get update && sudo apt-get install yarn
```
* Windows : 
[Installation page](https://yarnpkg.com/lang/en/docs/install/#windows-stable)

## Start Would you rather? :
```bash
cd WouldYouRather
yarn install
yarn start
```

## Considerations
All the features of the game are implemented on the front end with React and Redux. The app is not communicating with an API, therefore the changes are not persistent on refresh, they appear during the user session only.

The focus of this project is on writing functional React and Redux code, not on making the page beautiful. The goal for this project is correct functionality.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app)

## License
MIT
