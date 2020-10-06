import loader from "../../../assets/images/loader.gif";
import React from "react";
import s from '../../common/Preloader/Preloader.module.css'

let Preloader = (props) => {
    return <div>
        <img src={loader} className={s.loader}/>
    </div>
}

export default Preloader;