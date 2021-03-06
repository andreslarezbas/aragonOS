function makeErrorMappingProxy (target) {
  return new Proxy(target, {
    get (target, property) {
      if (property in target) {
        return target[property]
      }

      throw new Error(`Could not find error ${property} in error mapping`)
    },
    set () {
      throw new Error('Unexpected set to error mapping')
    }
  })
}

module.exports = makeErrorMappingProxy({
  // acl/ACL.sol
  ACL_AUTH_INIT_KERNEL: 'ACL_AUTH_INIT_KERNEL',
  ACL_AUTH_NO_MANAGER: 'ACL_AUTH_NO_MANAGER',
  ACL_EXISTENT_MANAGER: 'ACL_EXISTENT_MANAGER',

  // apm/APMRegistry.sol
  APMREG_INIT_PERMISSIONS: 'APMREG_INIT_PERMISSIONS',
  APMREG_EMPTY_NAME: 'APMREG_EMPTY_NAME',

  // apm/Repo.sol
  REPO_INVALID_BUMP: 'REPO_INVALID_BUMP',
  REPO_INVALID_VERSION: 'REPO_INVALID_VERSION',
  REPO_INEXISTENT_VERSION: 'REPO_INEXISTENT_VERSION',

  // apps/AragonApp.sol
  APP_AUTH_FAILED: 'APP_AUTH_FAILED',

  // common/Initializable.sol
  INIT_ALREADY_INITIALIZED: 'INIT_ALREADY_INITIALIZED',
  INIT_NOT_INITIALIZED: 'INIT_NOT_INITIALIZED',

  // common/SafeERC20.sol
  SAFE_ERC_20_BALANCE_REVERTED: 'SAFE_ERC_20_BALANCE_REVERTED',
  SAFE_ERC_20_ALLOWANCE_REVERTED: 'SAFE_ERC_20_ALLOWANCE_REVERTED',

  // common/Uint256Helpers.sol
  UINT64_NUMBER_TOO_BIG: 'UINT64_NUMBER_TOO_BIG',

  // common/VaultRecoverable.sol
  RECOVER_DISALLOWED: 'RECOVER_DISALLOWED',
  RECOVER_VAULT_NOT_CONTRACT: 'RECOVER_VAULT_NOT_CONTRACT',
  RECOVER_TOKEN_TRANSFER_FAILED: 'RECOVER_TOKEN_TRANSFER_FAILED',

  // ens/ENSSubdomainRegistrar.sol
  ENSSUB_NO_NODE_OWNERSHIP: 'ENSSUB_NO_NODE_OWNERSHIP',
  ENSSUB_NAME_EXISTS: 'ENSSUB_NAME_EXISTS',
  ENSSUB_DOESNT_EXIST: 'ENSSUB_DOESNT_EXIST',

  // evmscript/EVMScriptRegistry.sol
  EVMREG_INEXISTENT_EXECUTOR: 'EVMREG_INEXISTENT_EXECUTOR',
  EVMREG_EXECUTOR_ENABLED: 'EVMREG_EXECUTOR_ENABLED',
  EVMREG_EXECUTOR_DISABLED: 'EVMREG_EXECUTOR_DISABLED',
  EVMREG_SCRIPT_LENGTH_TOO_SHORT: 'EVMREG_SCRIPT_LENGTH_TOO_SHORT',

  // evmscript/EVMScriptRunner.sol
  EVMRUN_EXECUTOR_UNAVAILABLE: 'EVMRUN_EXECUTOR_UNAVAILABLE',
  EVMRUN_PROTECTED_STATE_MODIFIED: 'EVMRUN_PROTECTED_STATE_MODIFIED',
  EVMRUN_EXECUTOR_INVALID_RETURN: 'EVMRUN_EXECUTOR_INVALID_RETURN',

  // evmscript/executors/CallsScript.sol
  EVMCALLS_BLACKLISTED_CALL: 'EVMCALLS_BLACKLISTED_CALL',
  EVMCALLS_INVALID_LENGTH: 'EVMCALLS_INVALID_LENGTH',
  EVMCALLS_CALL_REVERTED: 'EVMCALLS_CALL_REVERTED',

  // kernel/Kernel.sol
  KERNEL_APP_NOT_CONTRACT: 'KERNEL_APP_NOT_CONTRACT',
  KERNEL_INVALID_APP_CHANGE: 'KERNEL_INVALID_APP_CHANGE',
  KERNEL_AUTH_FAILED: 'KERNEL_AUTH_FAILED',
})
