class DattebayoApi {
	constructor() {
		this.api = "https://dattebayo-api.onrender.com"
		this.headers = {
			"User-Agentt": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36"
		}
	}

	async getCharacters() {
		const response = await fetch(
			`${this.api}/characters`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getCharactersByIds() {
		const response = await fetch(
			`${this.api}/characters/ids`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getClans() {
		const response = await fetch(
			`${this.api}/clans`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getClansByIds() {
		const response = await fetch(
			`${this.api}/clans/ids`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getVillages() {
		const response = await fetch(
			`${this.api}/villages`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getVillagesByIds() {
		const response = await fetch(
			`${this.api}/villages/ids`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getKekkeiGenkai() {
		const response = await fetch(
			`${this.api}/kekkei-genkai`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getKekkeiGenkaiByIds() {
		const response = await fetch(
			`${this.api}/kekkei-genkai/ids`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getTailedBeasts() {
		const response = await fetch(
			`${this.api}/tailed-beasts`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getTailedBeastsByIds() {
		const response = await fetch(
			`${this.api}/tailed-beasts/ids`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getTeams() {
		const response = await fetch(
			`${this.api}/teams`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getTeamsByIds() {
		const response = await fetch(
			`${this.api}/teams/ids`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getAkatsuki() {
		const response = await fetch(
			`${this.api}/akatsuki`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getAkatsukiByIds() {
		const response = await fetch(
			`${this.api}/akatsuki/ids`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getKara() {
		const response = await fetch(
			`${this.api}/kara`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getAkatsukiByIds() {
		const response = await fetch(
			`${this.api}/kara/ids`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}
}

module.exports = {DattebayoApi}
