// Usage: When you want to limit the number of processes/instances to zero or one

function Process(state) {
  this.state = state;
}

const Singleton = (function () {
  function ProcessManager() {
    this.numProcess = 0;
  }

  let pManager;

  function createProcessManager() {
    pManager = new ProcessManager();
    return pManager;
  }

  return {
    getProcessManager: () => {
      if (!pManager) pManager = createProcessManager();
      return pManager;
    },
  };
})();

const processManagerOne = Singleton.getProcessManager();
const processManagerTwo = Singleton.getProcessManager();

console.log(processManagerOne === processManagerTwo);
