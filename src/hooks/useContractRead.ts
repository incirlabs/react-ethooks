import {ethers} from 'ethers';
import {useCallback} from 'react';

const useContractRead = (contract: ethers.Contract, method: string, defaultArgs: Args = []) => {
  const read = useCallback(
    async (args = defaultArgs): Promise<ContractResult> => {
      try {
        return {
          status: true,
          data: await contract[method](...args),
        };
      } catch (err) {
        return {status: false, error: err as Error};
      }
    },
    [contract, method, defaultArgs],
  );

  return read;
};

export default useContractRead;
