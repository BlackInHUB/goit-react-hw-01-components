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
  return (
    <Box py={5} textAlign='center' display='flex' flexDirection='column' alignItems='center'>
      <Profile user={user} />
      <Statistics title='Upload stats' data={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Box>
  );
};
