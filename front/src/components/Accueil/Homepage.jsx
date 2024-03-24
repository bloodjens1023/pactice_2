import { Link } from "react-router-dom";
import Bento from "./bento.jsx";
import "./Homepage.css";
import Splinehero from "./splinehero.jsx";
import "boxicons";
function Homepage() {
  return (
    <>
      {" "}
      <div className="navigation">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/">About</Link>
          <Link to="/">Contact</Link>
        </nav>
        <Link
          className="login"
          to="/inscription"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p>Login</p>
        </Link>
      </div>
      <div className="container">
        <div className="herosection">
          <h1
            style={{
              fontSize: "190px",
              textAlign: "center",
              color: "#fff",
              fontFamily:
                " system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;",
            }}
          >
            Take control
          </h1>
          <Splinehero />
        </div>
        <p className="subtitle">Aim for the future</p>
      </div>
      <div className="info">
        <h2>
          Control everything <br />
          where you want, <br />
          When you want
        </h2>
        <div className="bento">
          <Bento />
        </div>
      </div>
      <div className="smart">
        <p className="title2">Keep an eye on!</p>
        <div className="locker">
          <div className="items">
            <div className="lock1">
              <div className="cad"></div>
            </div>
            <div className="lock2">
              <div className="cad2">
                <box-icon type="solid" name="lock-alt"></box-icon>
              </div>
            </div>
            <div className="lock3">
              <div className="cad3">
                <box-icon type="solid" name="lock-alt"></box-icon>
              </div>
            </div>
            <div className="lock4">
              <div className="cad4">
                <box-icon type="solid" name="lock-alt"></box-icon>
              </div>
            </div>
          </div>
          <p className="ads">
            Don't worry we <br />
            guarded it like a castle
          </p>
        </div>
      </div>
    </>
  );
}

export default Homepage;
