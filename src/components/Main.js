import React, {useState, useEffect} from 'react';
import instagramLogo from "../assets/owner/instagram.png";
import twitterLogo from "../assets/owner/twitter.png";
import moreIcon from "../assets/owner/more.png";
import "./Main.css";

const Main = ({selectedPunk, punkListData}) => {
  const [activePunk, setActivePunk] = useState(punkListData[0])
 
 useEffect(() => {
      setActivePunk(punkListData[selectedPunk])
 }, [punkListData, selectedPunk])
  return (
      <div className='main'>
          <div className='mainContent'>
              <div className='punkHighLight'>
                  <div className='punkContainer'>
                      <img className='selectedPunk' src={activePunk.image_url} alt= ""/>
                  </div>
              </div>

              <div className='punkDetails' style={{ color: '#fff' }}>
                  <div className='title'>
                      {activePunk.name}
                      <span className='itemNumber'>-#{activePunk.token_id}</span>
                  </div>

                  <div className='owner'>
                  <div className='ownerImageContainer'>
                      <img src={activePunk.owner.profile_img_url} alt=""/>
                  </div>
                  <div className='ownerDetails'>
                      <div className='ownerNameAndHandle'>
                          <div>
                              {activePunk.owner.address}
                          </div>
                          <div className='ownerHandle'>@unnamed</div>
                      </div>
                      <div className='ownerLink'>
                        <img src={instagramLogo} alt='Instagram logo'/>
                      </div>

                      <div className='ownerLink'>
                      <img src={twitterLogo} alt='Twitter Logo'/>
                      </div>
                      <div className='ownerLink'>
                      <img src={moreIcon} alt='Github link'/>
                      </div>
              </div>

                  </div>
              </div>
          </div>   
      </div>
  )
}

export default Main;
