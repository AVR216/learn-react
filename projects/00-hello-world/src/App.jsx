import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

const format = (username) => `@${username}`;
// const formattedUsername = () => <span>AVR216</span>;

const users = [
  {
    username: 'AVR216',
    name: 'Jhon Villalba Rubio',
    isFollowing: false
  },
  {
    username: 'midudev',
    name: 'Miguel Angel Durán',
    isFollowing: false
  },
  {
    username: 'lorerios',
    name: 'Lorena Rios Siachoque',
    isFollowing: true
  }
];

function App () {
  return (
    <section className='app'>
      {
                users.map(user => {
                  const { username, name, isFollowing } = user;
                  return (
                    <TwitterFollowCard
                      key={username}
                      username={username}
                      formatUsername={format}
                      isFollowingInitial={isFollowing}
                    >
                      {name}
                    </TwitterFollowCard>
                  );
                })
            }
    </section>
  );
}

export default App;
