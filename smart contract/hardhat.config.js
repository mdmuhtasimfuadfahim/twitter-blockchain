require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.2",
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/Bm9P7BptnF3vJPcf2zmXZPkamPzR7XQQ',
      accounts: [process.env.MY_METAMASK_PRIVATE_KEY],
    }
  }

};
