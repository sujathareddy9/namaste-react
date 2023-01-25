import React from "react";

class ProfileClass extends React.Component{

    constructor(props){
        super(props)
        // create state 

        this.state={
            count:0,
            name:"",
            imgSrc:""
        }

        console.log("Child Constructor " +this.props.name)
    }

    async componentDidMount(){
        // API Call
        console.log("Child did mount "+this.props.name);
        let data = await fetch("https://api.github.com/users/sujathareddy9");
        let json = await data.json();
        this.setState({name:json.login});
        this.setState({imgSrc:json.avatar_url});
        console.log(json);

    };

    componentDidUpdate(){
        console.log("Child Did update "+this.props.name);
        // this.timer=setInterval(()=>{console.log('child')},1000)
    }
    

    componentWillUnmount(){
        // clearInterval(this.timer)
        console.log("Child will unmount "+this.props.name);
    }

    render(){
        console.log("Child render"+this.props.name);
        return(
           <div>
            <img src={this.state.imgSrc} />
           <h1> Profile Class Component</h1>
           <h2>Name:{this.state.name} 
            {this.state.count}
            </h2>
           <button onClick={()=>this.setState({
             // we do not Mutate Directly.
             // Never do this.state =  somethng.

            count:1
           })}> Count</button>
           </div>
        );
    }
}

export default ProfileClass;
//LIFE CYCLE TWO FACES
// 1. "Render Phase" , 2. "Commit Phase".
//  parent constructor
// 2. parent render
// 3. child constructor
// 4. child render
// DOM is updated
// json is logged in console
// child componenetdidmount
// parent componentdidmlunt.
