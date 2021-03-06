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

//const docRef = firestore.collection('koreanbap-cuisines').doc();

var cuisines_get = new Vue({
  el:"#cuisinesGet",
  data:{
    allcuisines:[],
    currcuisines: {},
    showModal: false
  },
  created: async function(){
    var snapshots = await firestore.collection('koreanbap-cuisines').get();

    var arr = [];
    snapshots.forEach((docs)=>{
      var obj = docs.data();
      obj.id = docs.id;

      arr.push(obj);
//      console.log(obj);
    })
    this.allcuisines = arr;
//    console.log(this.allcuisines);
  },
  methods:{
    OpenModal(c){
      if(this.showModal == false){
        this.showModal = true;
        this.currcuisines = c;
//        console.log(this.currcuisines);
        // pass over to the modal
      } 
    },
    closemod: function(){
      if(this.showModal == true){
        this.showModal = false;
      }
    }  
  }
});