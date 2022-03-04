import React from 'react'
// import styled from 'styled-components'
import ProfileHeader from '../components/profile/ProfileHeader'
import ProfileTweets from '../components/profile/ProfileTweets'
import Sidebar from '../components/Sidebar'
import Widgets from '../components/Widgets'
import styled from 'styled-components'

const style = {
    wrapper: `flex justify-center h-screen w-screen select-none bg-[#15202b] text-white`,
    content: `max-w-[1400px] w-2/3 flex justify-between`,
    mainContent: `flex-[2] border-r border-l border-[#38444d]`,
}
const Wrapper = styled.div`
  overflow-y: scroll;
  :: -webkit-scrollbar{
    display: none;
}`

const profile = () =>{
    return(
      <div className={style.wrapper}>
        <div className={style.wrapper}>
          <Sidebar />
          <Wrapper className={style.mainContent}>
            <ProfileHeader />
            <ProfileTweets />
          </Wrapper>
          <Widgets />
        </div>
      </div>
    )
}


export default profile