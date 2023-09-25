import React from 'react'
import Card from './Props/Card'
import Avatar1 from '../img/Avatars/Avatar1.png'
import Calendar from '../img/Icons/Calendar.png'
import Status from '../img/Icons/Status.png'
import Status2 from '../img/Icons/Status2.png'
import Add from '../img/Icons/Add.png'
import Settings from '../img/Icons/Settings.png'
import Filter from '../img/Icons/Filter.png'
import Messages from "./Components/Messages";
const Home = () => {
  return (
    <>
        <div className="Main">
            <div className="Rectangle">
                <div className="right">
                    <div className="profile">
                        <div className="avatar">
                            <img src={Avatar1} alt=""/>
                        </div>
                        <div className="Icons">
                            <img src={Status} alt=""/>
                            <img src={Status2} alt=""/>
                            <img src={Calendar} alt=""/>
                            <img src={Add} alt=""/>
                            <img src={Settings} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="separator"></div>
                <div className="left">
                    <div className="Search">
                        <input
                            type="search"
                            placeholder="Search Users on WhatsApp..."
                            className="SearchImages"
                        />
                        <img src={Filter} alt="Filter Images" className="Filter"/>

                    </div>
                    <div className="Contact">
                        <Card
                            alt="Images 2"
                            title="(310) 185-5245"
                            description="Hello Bro, how are you today..."
                        />
                        <Card
                            alt="Images 2"
                            title="(310) 185-5245"
                            description="Hello Bro, how are you today..."
                        />
                        <Card
                            alt="Images 2"
                            title="(310) 185-5245"
                            description="Hello Bro, how are you today..."
                        />
                        <Card
                            alt="Images 2"
                            title="(310) 185-5245"
                            description="Hello Bro, how are you today..."
                        />
                        <Card
                            alt="Images 2"
                            title="(310) 185-5245"
                            description="Hello Bro, how are you today..."
                        />
                    </div>
                </div>
            </div>
            <Messages/>
        </div>
    </>
  )
}

export default Home
