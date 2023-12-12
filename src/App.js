import RacingCarController from './controller/RacingCarController';

class App {
  #controller = new RacingCarController();
  async play() {
    await this.#controller.startGame();
  }
}

export default App;