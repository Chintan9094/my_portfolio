export const showWelcomeNotification = () => {
  if ("Notification" in window) {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        new Notification("Hey there! 😎", {
          body: "Thanks for checking out my portfolio 💻✨",
        });
      }
    });
  } else {
    console.log("Browser does not support notifications 😢");
  }
};

export const showMessageSentNotification = () => {
  if ("Notification" in window && Notification.permission === "granted") {
    new Notification("Message Sent ✅", {
      body: "Thanks for reaching out! I’ll get back to you soon 💌",
    });
  }
};

// export const showFooterNotification = () => {
//   if ("Notification" in window && Notification.permission === "granted") {
//     new Notification("You made it 🎉", {
//       body: "Thanks for checking out everything! Let’s connect 💼",
//     });
//   }
// };
