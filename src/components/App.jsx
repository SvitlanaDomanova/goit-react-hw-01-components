import { Profile } from './Profile/profile';
import user from '../data/user.json';

import { Transactions } from './Transactions/Transactions';
import transactions from '../data/transactions.json';

import {Statistics} from './Statistics/Statistics';
import data from 'data/statistics.json';

import { Friends } from './Friends/Friends';
import friends from 'data/friends.json';


export default function App() {
    return (
      <>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <Transactions items={transactions} />
        <Statistics title="Upload stats" stats={data} />
        <Statistics stats={data} />
  
        <Friends items={friends} />
      </>
    );
  }
  