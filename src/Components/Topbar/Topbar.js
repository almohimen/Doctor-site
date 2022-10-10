import React from 'react';
import './topbar.css'
import { SearchSharpIcon, Person2SharpIcon, ChatSharpIcon, NotificationsSharpIcon, Person2, ChatSharp, NotificationsSharp, SearchSharp, Person } from '@mui/icons-material';
import { AvatarGenerator } from 'random-avatar-generator';


const Topbar = () => {
    return (
        <div className="topbarContainer">
        <div className="topbarLeft">
          <span className="logo">Ease</span>
        </div>
        <div className="topbarCenter">
          <div className="searchbar">
            <SearchSharp className="searchIcon" />
            <input
              placeholder="Search for friend, post or video"
              className="searchInput"
            />
          </div>
        </div>
        <div className="topbarRight">
          <div className="topbarLinks">
            <span className="topbarLink">Homepage</span>
            <span className="topbarLink">Timeline</span>
          </div>
          <div className="topbarIcons">
            <div className="topbarIconItem">
              <Person />
              <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem">
              <ChatSharp />
              <span className="topbarIconBadge">2</span>
            </div>
            <div className="topbarIconItem">
              <NotificationsSharp />
              <span className="topbarIconBadge">1</span>
            </div>
          </div>
          <img src={"https://avataaars.io/"} alt="" className="topbarImg"/>
        </div>
      </div>
    );
};

export default Topbar;