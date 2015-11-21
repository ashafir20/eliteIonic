(function() {
'use strict';

	angular
		.module('eliteApp')
		.controller('LeaguesCtrl', ControllerController);

	ControllerController.$inject = ['eliteApi'];
	function ControllerController(eliteApi) {
		var vm = this;

		var leagues = eliteApi.getLeagues();
		var leagueData = eliteApi.getLeagueData();
		
		console.log(leagues, leagueData);
	}
})();