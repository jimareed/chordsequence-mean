var app = angular.module('app',[])

app.service('SongsSvc', function($http){
  this.fetch = function() {
	   return $http.get('/api/songs')
	}
	this.create = function(song){
	   return $http.post('/api/songs',song)
	}
})

app.controller('SongsCtrl',function($scope,SongsSvc){
 SongsSvc.fetch()
 .success(function(songs) {
   $scope.songs = songs
 })
 $scope.addSong = function() {
   if ($scope.songTitle) {
     var id = $scope.songTitle.replace(/ /g,'-')
     SongsSvc.create({
       username:'dickeyxxx',
       songtitle:$scope.songTitle,
       songid:id,
       artist:$scope.songArtist,
       chordsequence:$scope.songChordsequence,
       lyrics:$scope.songLyrics
     }).success(function(song){
       $scope.songs.unshift(song)
       $scope.songTitle = null
       $scope.songArtist = null
       $scope.songChordsequence = null
       $scope.songLyrics = null
     })
   }
}})
