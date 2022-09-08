import user from '../user.json'
import friends from '../friends.json'
import data from '../data.json'
import transactions from '../transactions.json'
import { Box } from './Box/Box';
import { Profile } from "./Profile/Profile";
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
const {username, avatar, tag, location, stats} = user
  
  return (
    <Box py={5} textAlign='center' display='flex' flexDirection='column' alignItems='center'>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats} />
      <Statistics title='Upload stats' data={data}></Statistics>
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Box>
  );
};
