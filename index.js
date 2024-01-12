// https://web.dev/blog/push-notifications-in-all-modern-browsers

const button = document.querySelector("button");
button.onclick = subscribeToPushService;
const swReg = await navigator.serviceWorker.register("/sw.js");
async function subscribeToPushService() {
  try {
    const pushSubscription = await swReg.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey:
        "BCp-kQUClPamzffhN9BFw9D1KeXy29yarMVOIbMTIp4ll8PAVyUEduzRqZuV1eCbNid5wXC6Sjw10RMy1qsHgfI",
    });
    console.log(pushSubscription);
    new Notification("Első üzenet");
  } catch (error) {
    console.log(error);
  }
}
