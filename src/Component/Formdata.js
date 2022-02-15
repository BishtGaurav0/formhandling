import React, { Component } from 'react'

 class Formdata extends Component {
  render() {
    return (
      <div>
           <div className="Display">
         {this.props.formdata.map((val,index)=>{
              return(
                  <div className='record' key={index}>
                    <h2>  {val.name} |  {val.bref}   |  {val.contact} </h2> 
                  </div>
              )
          })}
         </div>
      </div>
    )
  }
}
export default Formdata