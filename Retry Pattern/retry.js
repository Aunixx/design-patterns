//The retry design pattern enables an application to handle temporary failures when it tries to connect to a service or network resource.
// It does this by repeatedly retrying a failed operation. By retrying failed connections/requests, we can improve the overall stability of our application.

async function retryOperation() {
  let currentTry = 0;

  while (true) {
    try {
      externalServiceCall();
      console.log("Succeeded!");
      break;
    } catch (error) {
      currentTry++;
      console.log(`Failed attempt ${currentTry}`);

      if (currentTry >= 10) {
        console.log("Retry maximum reached. Exiting");
        break;
      }
    }
    await sleep(3000);
  }
}

function externalServiceCall() {
  console.log("Calling external service...");
  const shouldPass = Math.random() < 0.4;
  if (shouldPass) return true;
  else throw "Failure";
}

async function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

retryOperation();
