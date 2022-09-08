import user from '../user.json'
import { Box } from './Box/Box';
import { Profile } from "./Profile/Profile";
import { Statistics } from './Statistics/Statistics';

export const App = () => {
const {username, avatar, tag, location, stats} = user
  
  return (
    <Box textAlign='center' display='flex' flexDirection='column' alignItems='center'>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats} />
      <Statistics title='Upload stats'></Statistics>
    </Box>
  );
};
