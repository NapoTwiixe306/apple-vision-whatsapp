import React from 'react'
import Avatar from '../../img/Avatars/Avatar1.png'
import Conf from '../../img/ProfileSettings/Confidential.png'
import Theme from '../../img/ProfileSettings/Themes.png'
import SEC from '../../img/ProfileSettings/Security.png'
import AV from '../../img/ProfileSettings/Avatar.png'
import Not from '../../img/ProfileSettings/Notifications.png'
import Log from '../../img/ProfileSettings/Logout.png'
import Card2 from "../Props/Card2";
const ProfileSettings = () => {
  return (
    <>
      <div className="ProfileSettings">
        <div className="ProfileInfos">
          <div className="Pinfos">
            <img src={Avatar} alt=""/>
            <div className="Name">
              <p>Priti Gulati</p>
              <p>+91-8705001699</p>
            </div>
          </div>
        </div>
        <div className="OptionCard">
          <Card2
            title="Themes"
            image={Theme}
          />
          <Card2
              title="Sécurité"
              image={SEC}

          />
          <Card2
              title="Confidentialité"
              image={Conf}
          />
          <Card2
              title="Avatar"
              image={AV}
          />
          <Card2
            title="Notification"
            image={Not}
          />

          <div className="Déco">
            <Card2
                title="Déconnexion"
                image={Log}
            />
          </div>


        </div>
      </div>
    </>
  )
}

export default ProfileSettings
