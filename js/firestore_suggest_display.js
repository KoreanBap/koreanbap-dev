// Initialize Firebase
var config = {
	apiKey: "AIzaSyCbvK3qfFlV69cunT68WTjZZehGS6laxho",
	authDomain: "koreanban-2019.firebaseapp.com",
	databaseURL: "https://koreanban-2019.firebaseio.com",
	projectId: "koreanban-2019",
	storageBucket: "koreanban-2019.appspot.com",
	messagingSenderId: "121373359348"
};
firebase.initializeApp(config);
var firestore = firebase.firestore();

//const docRef = firestore.collection('koreanbap-suggestion');

var cuisines_fetch = new Vue({
	el:"#cuisines_suggestion",
	data:{
		allSuggestion:[],
	},
	created: async function(){
		var snaps = await firestore.collection('koreanbap-suggestion').get();
		
		var arrSuggest = [];
		snaps.forEach((docs)=>{
      var obj = docs.data();
      obj.id = docs.id;
      
      //docs.id
			arrSuggest.push(obj);
			console.log(obj);
		})
		this.allSuggestion = arrSuggest;
		console.log(this.allSuggestion);
	},
	methods:{
		deleteSuggestion: function(s){
			firestore.collection('koreanbap-suggestion').doc(s.id).delete().then(function(){
				alert("Suggestion deleted");
			}).catch(function(error){
				alert("Error deleting:", error)
			})
		}
	}
});

