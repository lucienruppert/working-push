// https://web.dev/blog/push-notifications-in-all-modern-browsers

const button = document.querySelector("button");
button.onclick = subscribeToPushService;
const swReg = await navigator.serviceWorker.register("/sw.js");
async function subscribeToPushService() {
  try {
    const pushSubscription = await swReg.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey:
        "BB_UyAD-r2mmFBATNx_5D9yIDwq4QFcRxxah3eDky7270f2ZrW62XBBZ_Es_ma4idues55uzNN4G-tzjbNjsnuQ",
    });
    console.log(pushSubscription);
    new Notification("Első üzenet");
  } catch (error) {
    console.log(error);
  }
}
