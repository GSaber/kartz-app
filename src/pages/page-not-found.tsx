import React,{FunctionComponent} from "react";
import { Link } from "react-router-dom";

const PageNotFound:FunctionComponent = () =>{
    return(
    <div className="center black-text">
        <h1 className="black-text">Page Not Found</h1>
        <Link to="/"> <button className="btn waves-effect waves-light grey darken-3" type="submit" name="action">
        <i className="material-icons right">arrow_back</i>
        Back</button></Link>
    </div>
    )
}
export default PageNotFound;