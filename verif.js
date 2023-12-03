function timer() {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    return currentHour >= 9 && currentHour < 17;
  }
  
  module.exports = { timer };
  