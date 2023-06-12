if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(showPosition);
} else {
  console.log("Trình duyệt không hỗ trợ Geolocation.");
}