# dattebayo_api.js
Web-API for [api-dattebayo.vercel.app](https://api-dattebayo.vercel.app/) an platform that's dedicated to provide developers, fans, and enthusiasts with a comprehensive API that dives deep into the vibrant and captivating world of Naruto, [Source](https://github.com/viniciusschuelter/dattebayo-api)

## Example
```JavaScript
async function main() {
	const { DattebayoApi } = require("./dattebayo_api.js")
	const dattebayoApi = new DattebayoApi()
	const characters = await dattebayoApi.getCharacters()
	console.log(latestRates)
}

main()
```
