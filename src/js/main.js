let apiKey = 'c716667c6320db4eb1e913a13892a790'
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Berlin&appid=${apiKey}&units=metric`


axios.get(apiUrl).then(displayTemperature) 

function formatDate(timestamp) {
	let date = new Date(timestamp)
	let hours = date.getHours()
	let minute = date.getMinutes()
	let days = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday"
	]
	let day = days[date.getDay()]

	if(minute < 10) {
		return `0${minute}`
	}
	if(hours < 10) {
		return `0${minute}`
	}
	return `${day} ${hours}:${minute}`
}

function displayTemperature(response) {
  let temperature = document.querySelector("#temperature")
  temperature.innerHTML = Math.round(response.data.main.temp)

  let location = document.querySelector("#location")
  let city = response.data.name
  let country = response.data.sys.country
  location.innerHTML = `${city}, ${country}`

  let description = document.querySelector("#description")
  description.innerHTML = response.data.weather[0].description

  let humidity = document.querySelector("#humidity")
  humidity.innerHTML = response.data.main.humidity

  let wind = document.querySelector("#wind")
	wind.innerHTML = Math.round(response.data.wind.speed)
	
	let dateElement = document.querySelector("#date")
	dateElement.innerHTML = formatDate(response.data.dt * 1000)
}

