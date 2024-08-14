import React, { useContext, useState } from 'react';
import { Context } from '../../context/Context';
import "./sidebar.css";

function Sidebar() {
    const [extended, setextended] = useState(false);
    const { onSent, prevprompt, setrecentprompt } = useContext(Context);

    return (
        <div className='sidebar'>
            <div className="top">
                <img onClick={() => setextended(prev => !prev)} className="menu" src="https://th.bing.com/th/id/R.85c14056bc70c6c6006af6a103f98acf?rik=IxuVbNIhZ8sZcQ&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_219135.png&ehk=MkfXFaUmSkqWKGbgQDhxAcbUk1tp06z%2bDNsw1SwLbSo%3d&risl=&pid=ImgRaw&r=0" alt="" />
                <div className="new-chatt">
                    <img src="https://png.pngtree.com/png-clipart/20190516/original/pngtree-button-plus-icon-png-image_3566853.jpg" alt="" />
                    {extended ? <p>New chatt</p> : null}
                </div>
                {
                    extended ? <div className="recent">
                        <p className="recent-title">
                            recent
                        </p>
                        {prevprompt.map((item, index) => {
                            return (
                                <div className="recent-entry">
                                    <img src="https://static.vecteezy.com/system/resources/previews/004/879/666/original/chat-message-icon-on-a-white-background-free-vector.jpg" alt="" />
                                    <p>{item}</p>
                                </div>
                            )
                        })}
                    </div> : null
                }
            </div>
            <div className="bottom">
                <div className="button-item recent-entry">
                    <img src="https://clipartcraft.com/images/question-mark-clip-art-transparent-4.png" alt="" />
                    {extended ? <p>help</p> : null}
                </div>
                <div className="button-item recent-entry">
                    <img src="https://icon-library.com/images/history-icon/history-icon-24.jpg" alt="" />
                    {extended ? <p>Activity</p> : null}
                </div>
                <div className="button-item recent-entry">
                    <img src="https://static.vecteezy.com/system/resources/previews/000/441/796/original/vector-settings-icon.jpg" alt="" />
                    {extended ? <p>Settings</p> : null}
                </div>
            </div>
        </div>
    )
}

export default Sidebar
