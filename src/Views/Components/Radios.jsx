import React from 'react'
import Avatar from "../../img/Avatars/Avatar1.png";
import Theme from "../../img/RadiosIcons/Canal+.png";
import SEC from "../../img/RadiosIcons/CanalF1.png";
import Conf from "../../img/RadiosIcons/CanalFoot.png";
import AV from "../../img/RadiosIcons/FunRAdio.png";
import Not from "../../img/RadiosIcons/Netflix.png";
import Log from "../../img/RadiosIcons/RealMadrid.png";
import Wa from "../../img/RadiosIcons/WhatsApp.png";
import Card3 from "../Props/Card3";
import '../../scss/Views/Props/Card3.scss';

const Radios = () => {
  return (
    <>
      <div className="Radios">
        <div className="ProfileInfos">
          <div className="Pinfos">
            <img src={Avatar} alt=""/>
            <div className="Name">
              <p>Priti Gulati</p>
              <p className="in">Restez informé, avec nos différentes Radios</p>
            </div>
          </div>
        </div>
        <div className="OptionCard">
          <Card3
              title="Canal+ X Formula One"
              image={Theme}
          />
          <Card3
              title="Canal+ & Canal+ 360"
              image={SEC}

          />
          <Card3
              title="Canal+ X FootBall"
              image={Conf}
          />
          <Card3
              title="Fun Radio France"
              image={AV}
          />
          <Card3
              title="Netflix"
              image={Not}
          />
          <Card3
              title="Real Madrid"
              image={Log}
          />
          <Card3
              title="WhatsApp Officiel"
              image={Wa}
          />


        </div>
      </div>
    </>
  )
}

export default Radios
