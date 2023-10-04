const lookupBtn = document.querySelector(".lookup-btn");
const isDisplay = document.querySelector(".ip-display");
const locationDisplay = document.querySelector(".location-display");
const geoDisplay = document.querySelector(".geo-display");
const loader =document.querySelector(".loader-container");
const details=document.querySelector(".details");
lookupBtn.addEventListener("click", () => {
    loader.style.display="flex";
    details.style.display="none";
  axios.get("https://ipapi.co/json/").then((response) => {
    loader.style.display="none";
    details.style.display="flex";
    isDisplay.textContent = `Ip:${response.data.ip}`;

    locationDisplay.textContent = `Location: ${response.data.city},${response.data.region}, ${response.data.country_name}`;

    geoDisplay.textContent = `Geo Location: ${response.data.latitude}, ${response.data.longitude}`;
  });
});
