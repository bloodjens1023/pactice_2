import {useNavigate  } from "react-router-dom";
function Loading() {
    const navigate = useNavigate();
    setTimeout(function() {
        navigate('/Produits');
    },1000)
    return ( 
        <div className="banter-loader">
            <div className="banter-loader__box"></div>
            <div className="banter-loader__box"></div>
            <div className="banter-loader__box"></div>
            <div className="banter-loader__box"></div>
            <div className="banter-loader__box"></div>
            <div className="banter-loader__box"></div>
            <div className="banter-loader__box"></div>
            <div className="banter-loader__box"></div>
            <div className="banter-loader__box"></div>
        </div>
     );
}

export default Loading;