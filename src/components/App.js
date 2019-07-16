import React from 'react';
import Profile from './Profile/Profile';
import users from '../assets/users.json';
import Stats from './Stats/Stats';
import stats from '../assets/stats.json';
import PricingPlan from './PricingPlan/PricingPlan';
import pricingPlan from '../assets/pricing-plan.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactionHistory from '../assets/transactions.json';

const App = () => {
  return (
    <>
      <Profile users={users} />
      <Stats stats={stats} title="Upload stats" />
      <PricingPlan items={pricingPlan} />
      <TransactionHistory items={transactionHistory} />
    </>
  );
};

export default App;
