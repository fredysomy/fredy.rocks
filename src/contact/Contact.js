import react,{Component} from 'react'
import './Contact.css'
import axios from 'axios';
export default class Contact extends Component{

    constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }
  mailonChange(event){
     
      this.setState({email:event.target.value})
  }
  nameonChange(event){
     
      this.setState({name:event.target.value})
  }
  messageonChange(event){
      
      this.setState({message:event.target.value})
  }
  handleSubmit(event){
      event.preventDefault()
      fetch("https://3trd25.deta.dev/email", {
  method: "POST",
  body: JSON.stringify({"emails":"fredysomy02@gmail.com"}),
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    "emails": "fredysomy02@gmail.com"
  }

})
  }
    render(){
        return(
            <div id="contact">
                <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" className="form-control" onChange={this.nameonChange.bind(this)}/>
    </div>
    <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input type="email" className="form-control" aria-describedby="emailHelp" onChange={this.mailonChange.bind(this)} />
    </div>
    <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea className="form-control" rows="5" onChange={this.messageonChange.bind(this)}></textarea>
    </div>
    <button onClick={this.handleSubmit.bind(this)} type="submit" className="btn btn-primary">Submit</button>
               </div>
        )
    }
}

//onChange={this.messageonChange.bind(this)}