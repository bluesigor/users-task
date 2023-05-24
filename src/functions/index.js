export function initializeFacebookSdk() {
  /* Asynchronous flow: if the global 'FB' variable is still undefined,
           then the facebook script hasn't loaded yet, in that case, provide
           a global callback that will be called by the facebook code. If the 
           variable is already present, just call the code right away and forget
           about the callback. */
  if (window.FB === undefined) {
    console.log("FB undefined -> provide callback");
    window.fbAsyncInit = function () {
      initialize();
    };
  } else {
    console.log("FB defined -> call init right away");
    initialize();
  }

  function initialize() {
    window.FB.init({
      appId: "226770643325005",
      cookie: true,
      xfbml: true,
      version: "v16.0",
    });
  }
}
