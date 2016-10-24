var EventEmitter = require('events').EventEmitter;

var merge = require('merge');
var axios = require('axios');
var Dispatcher = require('../dispatchers/appDispatcher.js');
var browserHistory = require("react-router/lib/browserHistory");

var loggedIn = false;
var registered = false;
var token;
var username;
var homeLogged = false;
var loggedOut = false;
var images = [];

var UserStore = merge(EventEmitter.prototype, {
  getLoggedIn: function(){
  	return loggedIn;
  },
  getRegistered: function(){
  	return registered;
  },
  getImages: function(){
  	return images;
  },
  getUser: function(){
  	return username;
  }
})

module.exports = UserStore;

Dispatcher.register(handleAction);

function handleAction(payload) {

	if(payload.action === "GETDATA"){
		axios({
  			method: 'get',
  			url: '/api'
		}).then(function(response) {
			if(response.status === 200){
				images = response.data.images;
				return UserStore.emit("images");
			}
		}).catch(function(error) {
			console.log(error);
			browserHistory.push('/login');
		});

	}else if(payload.action === "LOGIN"){
		axios({
  			method: 'post',
  			url: '/login',
  			data: {
    			username: payload.username,
    			password: payload.password
  			}
		}).then(function(response) {
				console.log("logging in");
				loggedIn = true;
				sessionStorage.setItem("myKey", "logged in");
				username = payload.username;
				UserStore.emit("loggedIn");
		}).catch(function(error) {
			console.log("error: " + error);
		});

	}else if(payload.action === "REGISTER"){
		axios({
  			method: 'post',
  			url: '/register',
  			data: {
    			username: payload.username,
    			password: payload.password
  			}
		}).then(function(response) {
			if(response.data == "success"){
				registered = true;
				console.log("registered");
				UserStore.emit("registered");
				browserHistory.push('/login');
			}else{
				browserHistory.push('/register');
			}
			
		}).catch(function(error) {
			console.log("error: " + error);
		});

	}else if(payload.action === "GETLOGOUT"){
		axios({
  			method: 'post',
  			url: '/logout',
		}).then(function(response) {
			loggedOut = true;
			sessionStorage.removeItem('myKey');
			UserStore.emit("loggedOut");
			browserHistory.push('/login');
		}).catch(function(error) {
			console.log("error: " + error);
		});
	}
	
}