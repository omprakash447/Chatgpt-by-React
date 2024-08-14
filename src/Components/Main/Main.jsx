import React, { useContext } from 'react';
import { Context } from '../../context/Context';
import "./main.css";

function Main() {

    const { onSent, recentprompt, showresult, loading, esultdata, setinput, input, resultdata } = useContext(Context);
    return (
        <div className='main'>
            <div className="nav">
                <p>Om's AI</p>
                <img src="https://th.bing.com/th/id/R.6b0022312d41080436c52da571d5c697?rik=Ql6UUNosrWAY0w&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fpng-user-icon-icons-logos-emojis-users-2400.png&ehk=8agkVrs8bo9zafVF9Qk4%2bFqv5IwaEZrb8DwX%2ftfJtNc%3d&risl=&pid=ImgRaw&r=0" alt="" />
            </div>
            <div className="main-container">

                {!showresult ?
                    <>
                        <div className="greet">
                            <p><span>Hello ,My self Om</span></p>
                            <p>How can i help u today</p>
                        </div>
                        <div className="cards">
                            <div className="card">
                                <p>Suggest beautiful places and explore it and see what are they</p>
                                <img src="https://th.bing.com/th/id/OIP.j3-PUqOVIlWhsQ-4yuh3BAHaHa?rs=1&pid=ImgDetMain" alt="" />
                            </div>
                            <div className="card">
                                <p>Suggest beautiful places and explore it and see what are they</p>
                                <img src="https://static.vecteezy.com/system/resources/previews/000/554/841/original/lightbulb-vector-icon.jpg" alt="" />
                            </div>
                            <div className="card">
                                <p>Suggest beautiful places and explore it and see what are they</p>
                                <img src="https://th.bing.com/th/id/OIP.ZKz0Cs5Ffb9K70a43DzQigHaHa?rs=1&pid=ImgDetMain" alt="" />
                            </div>
                            <div className="card">
                                <p>Suggest beautiful places and explore it and see what are they</p>
                                <img src="https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-and-lines-1/2/10-1024.png" alt="" />
                            </div>
                        </div>
                    </> : <div className='result'>
                        <div className="result-title">
                            <img src="https://th.bing.com/th/id/R.6b0022312d41080436c52da571d5c697?rik=Ql6UUNosrWAY0w&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fpng-user-icon-icons-logos-emojis-users-2400.png&ehk=8agkVrs8bo9zafVF9Qk4%2bFqv5IwaEZrb8DwX%2ftfJtNc%3d&risl=&pid=ImgRaw&r=0" alt="" />
                            <p>{recentprompt}</p>
                        </div>
                        <div className="result-data">
                            <img src="https://assets-global.website-files.com/59e16042ec229e00016d3a66/63f59ad47cebaf30e12e0602_Top%20generative%20AI%20tools_Blog%20listing.png" alt="" />
                            {loading?<div className='loader'>
                                <hr />
                                <hr />
                                <hr />
                            </div>:<p dangerouslySetInnerHTML={{ __html: resultdata }}></p>}
                        </div>
                    </div>
                }
                <div className="main-button">
                    <div className="searchbox">
                        <input onChange={(e) => setinput(e.target.value)} value={input} type="text" placeholder="Enter the prompt here..."/>
                        <div>
                            <img src="https://icon-library.com/images/gallery-icon-vector/gallery-icon-vector-25.jpg" alt="" />
                            <img src="https://th.bing.com/th/id/OIP.CxoXl2WwdgT_XoSVHtJ3NAHaI6?rs=1&pid=ImgDetMain" alt="" />
                            {input?<img onClick={() => onSent()} src="https://th.bing.com/th/id/OIP.YT3XluhsBhPXY0DWdC3yEQHaHa?rs=1&pid=ImgDetMain" alt="" />:null}
                        </div>
                    </div>
                    <div className='button-info'>
                        <p>Hii , my self Om prakash , i have created a Personal AI for user benifits...Lets try it...</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;
