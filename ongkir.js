var unirest = require('unirest')
var setting = require('./setting')


module.exports = {

	getProvince: function(provinceId) {
		return new Promise((resolve, rej) => {
			unirest.get('http://pro.rajaongkir.com/api/province?id=' + provinceId)
			.headers(setting.getKey())
			.end(function (response) {
				var body = response.body
				resolve(body)
			});
		})
	},

	getCities: function(provinceId) {
		return new Promise((resolve, rej) => {
			unirest.get('http://'+setting.account()+'.rajaongkir.com/api/city?province=' + provinceId)
			.headers(setting.getKey())
			.end(function (response) {
				var body = response.body
				resolve(body)
			});
		})
	},

	getSubdistricts: function(cityId) {
			return new Promise((resolve, rej) => {
			unirest.get('http://'+setting.account()+'.rajaongkir.com/api/subdistrict?city'+ cityId)
			.headers(setting.getKey())
			.end(function (response) {
				var body = response.body
				resolve(body)
			});
		})
	},


	getRestUrl: function(params) {
		console.log("module",params)
		return new Promise((resolve, rej) => {
			unirest.get('http://'+setting.account()+'.rajaongkir.com/api/'+setting.getPath(params))
			.headers(setting.getKey())
			.end(function (response) {
				var body = response.body
				resolve(body)
			});
		})
	},

	/**
	* @ params object {originId, destinationId, weight}
	*/
	getCost : function(params) {
		return new Promise((resolve, rej) => {
			unirest.post('http://'+setting.account()+'.rajaongkir.com/api/cost')
			.headers(setting.getHeaders())
			.send(setting.getInfo(params))
			.end(function (response) {
				var body = response.body
				resolve(body)
			});
		})
	}

}

