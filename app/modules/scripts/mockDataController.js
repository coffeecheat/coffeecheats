angular
	.module('modules')
	.controller('MockDataController', function($scope, supersonic) {
    
    $scope.Cafes = [
          {
            CafeId:'1',CafeName:'Haddons',AddressID:1,Rating:'5',ContactNo:'0455243123',
            Description:'Right inside Swinburne uni, it has standard cafe food (pies, cakes, sandwhiches) in the fridge, and coffee',
            Address:
            {
              AddressID:1,
              Text:'27 John Street, Swinburne, Hawthorn, Melbourne',
              Latitude:-37.8220792,
              Longitude:145.0383064,
              Directions:'-37.8220792,145.0383064'
            }
          },
          {
            CafeId:2,CafeName:'StarBucks',AddressID:2,Rating:'7',ContactNo:'0455243987',Description:'Starbucks like to do things a little differently. It’s about coffee, quality, connections. A creative place that embraces diversity with a menu as unique as you are. It’s about an adventurous spirit, no limits, new creations, innovations.',
            Address:
            {
              AddressID:2,
              Text:'Eastland Shopping Centre, 171 - 175 Maroondah Hwy, Ringwood VIC 3134',
              Latitude:37.8114397,
              Longitude:145.160335,
              Directions:'37.8114397,145.160335'
            }
          }
        ];


      $scope.directions=function(latlong){
          var string="https://www.google.com/maps/search/?api=1&query="+latlong+"&travelmode=driving&dir_action=navigate";
          supersonic.logger.debug(string);
					steroids.openURL(string);

        };

//};
});
