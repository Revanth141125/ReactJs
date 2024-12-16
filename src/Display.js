import React,{Component} from 'react';
export default class Display extends Component{
    render(){
        return(
        <div>
            <h1>This is {this.props.name}</h1>
        </div>

        );
    }
}
//git init
//git add README.md
//git commit -m "first commit"
//git branch -M main
//git remote add origin https://github.com/Revanth141125/ReactJs.git
//git push -u origin main