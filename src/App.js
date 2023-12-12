import RacingCarController from './controller/RacingCarController';

class App {
  #controller = new RacingCarController();
  async play() {
    await this.#controller.receiveCarNames();
    await this.#controller.receivePlayCount();
  }
}

export default App;


const app = new App();
app.play();