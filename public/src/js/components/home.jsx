var React = require('react');
var UserStore = require('../stores/userStore.js');
var Dispatcher = require('../dispatchers/appDispatcher.js');
var checkLoggedIn = 0;

var Home = React.createClass({
  getInitialState: function() {
  	return {
  		images: ""
  	}
  },

  componentWillMount: function(){
  	this.handleGetLoggedIn();
  },

  componentDidMount: function() {
    UserStore.on("images", function() {
    	this.setState({
    		loggedin: UserStore.getLoggedIn(),
    		images: UserStore.getImages()
    	})
    }.bind(this));
  },

  handleGetLoggedIn: function(e){
      Dispatcher.dispatch({
        action: "GETDATA"
      });
  },
  kkchange: function(){
  	console.log("efasds");
  },
  render() {
  	 console.log(this.state);
  	if (this.state.images) {
  		var images = this.state.images.map(function(image, i) {
  			if (!image.is_album) {
  				return (
            	  <div className="row" key={i}>
		  			<div className="col s12 m12">
            			<div className="card blue-grey lighten-4">
               				<div className="card-image waves-effect waves-block waves-light">
                 				<img className="activator" src={image.link}/>                
              	 			</div>
               				<div className="card-content activator">                  
                  				<p>{image.title}</p>
               				</div>
               				<div className="card-action">
               					<div>
               						<p className="ups">{image.ups}</p>
               						<p className="downs">{image.downs}</p>
               						<p className="score">{image.score}</p>
               					</div>
               					<div>
               						<a href="#"><i className="material-icons thumbup">thumb_up</i></a>
                  					<a href="#"><i className="material-icons thumbdown">thumb_down</i></a>
                  					<a href="#"><i className="material-icons star">stars</i></a>
                  				</div>
                  			</div>
            			</div>
         			</div>
      			</div>	
            	) 
  			} else {
  				return ("");
  			}
  		});
  	} else {
  		var images = "";
  	}

    return (
      <div className="container" >
      
    	<div className="container">
    		{images}
        </div>
      </div>
    )
    	// <h1 className="center-align username">{this.state.user+"'s images"}</h1>
  }
})
module.exports = Home;