import { pools } from '../../configure';

const tokens = {};

pools.forEach(({ token, tokenAddress, earnedToken, earnedTokenAddress }) => {
  tokens[token] = {
    tokenAddress: tokenAddress,
    tokenBalance: 0,
  };
  tokens[earnedToken] = {
    tokenAddress: earnedTokenAddress,
    tokenBalance: 0,
  };
});

const initialState = {
  pools,
  tokens,
  contractApy: {},
  fetchContractApyPending: false,
  fetchPoolBalancesPending: false,
  fetchBalancesPending: false,
  fetchApprovalPending: {},
  fetchDepositPending: {},
  fetchWithdrawPending: {},
};

export default initialState;
