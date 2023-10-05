import { Profile } from './Profile/Profile.jsx'
import { Statistics } from '../components/Statistics/Statistics.jsx'
import {FriendList} from '../components/FriendList/FriendList.jsx'
import { TransactionHistory } from './Transactions/TransactionHistory.jsx'
import statistic from '../components/Statistics/data.json'
import friend from '../components/FriendList/friends.json'
import transactions from "./Transactions/transactions.json"


export const App = () => {
  return (
    <>
      <Profile />
      <Statistics title="Upload stats" stats={statistic} />
      < FriendList friends={friend}/>
      <TransactionHistory items={transactions}/>
    </>

  )
};
