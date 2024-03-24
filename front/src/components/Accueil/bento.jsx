import "./bento.css";
import Cloud from "./cloud.jsx";
import "boxicons";
const App = () => {
  return (
    <>
      <div className="bento">
        <div className="inpad">
          <p className="inpat">Make yours</p>
        </div>
        <div className="rect1"></div>
        <div className="rect2"></div>
        <div className="line"></div>

        <div className="rect3">
          <box-icon name="edit" color="#212121"></box-icon>
          <p>Design your own system</p>
        </div>
        <div className="rect4">
          <Cloud />
        </div>
        <div className="rect4">
          <box-icon
            type="solid"
            color="#212121"
            name="cctv"
            bx-tada-hover
          ></box-icon>
          <p>
            Real time <br />
            survey
          </p>
        </div>
        <div className="rect5">
          <img src="./assets/logo.svg" alt="" />
        </div>
      </div>
    </>
  );
};
export default App;
