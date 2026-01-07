import { Header } from "../components/Header";
import { NavLink  } from 'react-router'
import './ErrorPage.css';

export function ErrorPage() {
  return (
    <>
     <title>404</title>
     <Header />

     <div className="ErrorContainer">
      <div className="ErrorResponse">
        <h1>404</h1>
        <h4>Not Found</h4>
        <p>The resource requested could not be found on this server!</p>
        <NavLink to="/">
          <button>Back Home</button>
        </NavLink>
      </div>
     </div>
    </>
  ) 
}
