import user from '../user.json'
import { Box } from './Box/Box';
import { Profile } from "./Profile/Profile";

export const App = () => {
const {username, avatar, tag, location, stats} = user
  
  return (
    <Box textAlign='center' display='flex' flex-direction='column' justifyContent='center'>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats} />
    </Box>
  );
};
