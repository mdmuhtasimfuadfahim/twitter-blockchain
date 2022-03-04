import React from "react"
import Post from '../Post'
import ProfileImageAsset from '../../assets/image.jpg'

const style = {
    wrapper: `no-scrollbar`,
    header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
    headerTitle: `text-xl font-bold`,
}


const tweets = [{
    displayName: 'Muhtasim',
    userName: '0xD869656272c1e1367e2582BeD9008270E4210BC8',
    avatar: ProfileImageAsset,
    text: 'hello',
    isProfileImageNft: false,
    timestamp: '2022-03-02T12:00:00.000Z',
},
{
  displayName: 'Muhtasim',
  userName: '0xD869656272c1e1367e2582BeD9008270E4210BC8',
  avatar: ProfileImageAsset,
  text: 'hello',
  isProfileImageNft: false,
  timestamp: '2021-04-02T12:00:00.000Z',
},
{
  displayName: 'Muhtasim',
  userName: '0xD869656272c1e1367e2582BeD9008270E4210BC8',
  avatar: ProfileImageAsset,
  text: 'hello',
  isProfileImageNft: true,
  timestamp: '2020-02-05T12:00:00.000Z',
},
]

const ProfileTweets = () =>{
    return(
        <div className={style.wrapper}>
            {tweets?.map((tweet, index) => (
                <Post
                  key={index}
                  displayName="Muhtasim Fuad Fahim"
                  userName={`${tweet.userName.slice(0, 4)}...${tweet.userName.slice(-4)}`}
                  text={tweet.text}
                  avatar={tweet.avatar}
                  isProfileImageNft={tweet.isProfileImageNft}
                  timestamp={tweet.timestamp}
                />
            ))}
        </div>
    )
}

export default ProfileTweets