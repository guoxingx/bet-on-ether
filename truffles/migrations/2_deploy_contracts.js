const BetOnEther = artifacts.require("./BetOnEther.sol")

module.exports = function(deployer) {
    deployer.deploy(Vote);
};
