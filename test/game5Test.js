const { loadFixture } = require('@nomicfoundation/hardhat-network-helpers');
const { assert } = require('chai');

describe('Game5', function () {
  async function deployContractAndSetVariables() {
    const [owner] = await ethers.getSigners();
    const Game = await ethers.getContractFactory('Game5');
    const game = await Game.deploy();

    return { game, owner };
  }
  it('should be a winner', async function () {
    const { game, owner } = await loadFixture(deployContractAndSetVariables);

    console.log(owner.address);
    await game.connect(owner).win();

    // leave this assertion as-is
    assert(await game.isWon(), 'You did not win the game');
  });
});
