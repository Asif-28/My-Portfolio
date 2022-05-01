import "./topbar.scss";
import {Person,Mail} from '@material-ui/icons'

export default function Topbar() {
  return (
    <div className='topbar' id="topbar">
        <div className="wrapper">
            <div className="left">
                <a href="#intro" className="logo">Asif</a>
                <div className="itemContainer">
                  <Person className="icon"/>
                  <span>+91 79039 16011 </span>
                   
                </div>
                <div className="itemContainer">
                    <Mail className="icon"/>
                    <span>asif.a.7277@gmail.com</span>              
                </div>
            </div>
            <h1>Hello</h1>
            <div className="right">This is Right</div>
        </div>
    
    </div>
  )
}
