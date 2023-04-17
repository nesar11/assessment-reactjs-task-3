import React from "react";

export default function Contact(){
    return(
        <form>
        <label>
          Name:
          <input type="text" name="name"  placeholder="Name"/>
          
        </label> <br></br>
        <label>
          Email:
          <input type="email" name="email"  placeholder="Email"/>
          
        </label> <br></br>
        <input type="submit" value="Submit" />
      </form>
    )
}