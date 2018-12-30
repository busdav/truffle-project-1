var Notary = artifacts.require('../contracts/Notary.sol');

module.exports = function(deployer) {
  deployer.deploy(Notary);
}