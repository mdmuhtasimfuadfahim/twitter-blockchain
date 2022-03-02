import { BsStars } from 'react-icons/bs'
import TweetBox from './TweetBox'
import Post from '../Post'

const style = {
    wrapper: `flex-[2] border-r border-l border-[#38444d] `,
    header: `sticky top-0 bg-[#15202b] z-8 p-2 flex justify-between items-center`,
    headerTitle: `text-xl font-bold`,
  }

  const tweets = [{
      displayName: 'Muhtasim',
      userName: '0xD869656272c1e1367e2582BeD9008270E4210BC8',
      avatar: '',
      text: 'hello',
      isProfileImageNft: false,
      timestamp: '2022-03-02T12:00:00.000Z',
  },
  {
    displayName: 'Muhtasim',
    userName: '0xD869656272c1e1367e2582BeD9008270E4210BC8',
    avatar: '',
    text: 'hello',
    isProfileImageNft: false,
    timestamp: '2021-04-02T12:00:00.000Z',
},
{
    displayName: 'Muhtasim',
    userName: '0xD869656272c1e1367e2582BeD9008270E4210BC8',
    avatar: '',
    text: 'hello',
    isProfileImageNft: false,
    timestamp: '2020-02-05T12:00:00.000Z',
},
]
function Feed(){
    return(
        <div className={style.wrapper}>
            <div className={style.header}>
                <div className={style.headerTitle}>Home</div>
                <BsStars />
            </div>
            <TweetBox />
            {tweets.map((tweet, index) => (
                <Post
                  key={index}
                  displayName={tweet.displayName}
                  userName={`${tweet.userName.slice(0, 4)}...${tweet.userName.slice(-4)}`}
                  avatar={tweet.userName}
                  text={tweet.text}
                  isProfileImageNft={tweet.isProfileImageNft} 
                />
            ))}
        </div>
    )
}

export default Feed