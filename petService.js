"use strict";
{
     function petService($http){
        let pets =  [{title:"Panda", image:"https://www.telegraph.co.uk/content/dam/news/2016/08/23/106598324PandawaveNEWS_trans_NvBQzQNjv4Bqeo_i_u9APj8RuoebjoAHt0k9u7HhRJvuo-ZLenGRumA.jpg?imwidth=450"},
        {title: "Hairless Cat", image:"http://static1.squarespace.com/static/5859ff3df5e231af4a55c416/t/585b04ff29687f637c6e292f/1482360064086/gfgfgf.jpg?format=1000w"}]


        const getPets = function(){
            return pets;
        }

        const setPets = function(newPets){
            pets = newPets;
        }

        const callPetsAPI= function(){
            let url = "https://dwolverton.github.io/fe-demo/data/pets.json";
           return $http.get(url);
        }

        return {
            setPets,
            getPets,
            callPetsAPI
        }
    }

    angular
        .module("app")
        .factory("petService", petService);
}