export class App {
  constructor() {
  this.heading = 'App';
  }

  configureRouter(config, router) {
    this.router = router;
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'home'], name: 'Home', moduleId: PLATFORM.moduleName('views/home'), nav: true, title: "Home" },
      { route: 'hello', name: 'Hello', moduleId: PLATFORM.moduleName('views/hello'), nav: true, title: "Hello" },
      { route: 'todo', name: 'Todo', moduleId: PLATFORM.moduleName('views/todo'), nav: true, title: "Todo" }
    ]);
  }
}
