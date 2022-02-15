import React, { Component } from 'react'
import FormData from './Formdata'
import './Form.css'
class Form extends Component {
     constructor(){
         super();
         this.state={
             name:"",
             bref:"",
             contact: null,
             display:false,
             user:[]
         }
     }

     managestate=(e)=>{
         this.setState({[e.target.name]:e.target.value});
     }   
     manageSubmit=(e)=>{
        e.preventDefault()
        const tempObj={
            name:this.state.name,
            bref:this.state.bref,
            contact:this.state.contact,
    
        }
        let temparr=this.state.user;
        temparr.push(tempObj);
        this.setState({user:temparr})

        this.setState({name:"",
        bref:"",
        contact:"",
        display:true})
     }

  render() {
    return (
      <div className='employee'>
           <div className="heading">EMPLOYEE FEEDBACK FORM</div>
          {!this.state.display && <form>
              <label className='title' >Name</label>
              <input type="text" name='name' id='name' className='Border' onChange={(e)=>this.managestate(e)} value={this.state.name}  />
              <br></br>
              
              <label className='title'>Department</label>
              <input type="text" name='bref' id='bref' className='Border'  onChange={(e)=>this.managestate(e)} value={this.state.bref}  />
              <br></br>

              <label className='title'>Rank</label>
              <input type="number" name='contact' id='contact' className='Border' onChange={(e)=>this.managestate(e)} value={this.state.contact}  />
              <br></br>
        
              <button  className='button'  onClick={(event)=>this.manageSubmit(event)}>Submit</button>
          
          </form>
          }
          
        {this.state.display && <FormData formdata={this.state.user}/>}
        {this.state.display && <button type="submit" value="Go Back" onClick={() => this.setState({display:false})}>Go Back</button>}
 



      </div>
    )
  }
}
export default Form