require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.2",
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/Bm9P7BptnF3vJPcf2zmXZPkamPzR7XQQ',
      accounts: ['a1ac1f3ea9364e2f5866078c7f6716cf0703b632a6112a187a8199af1f406bde'],
    }
  }

};
