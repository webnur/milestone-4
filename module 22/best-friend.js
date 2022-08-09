
function bestFriend(friends){

   let maxFriend = ""
    for(let i = 0; i <friends.length; i++){
       const friend = friends[i];

        if(maxFriend.length < friend.length){
            maxFriend = friend;
        }
    }

    return maxFriend;
}

let allFriend = ['rayhan hawlader', 'naser ahmed chandpuri', 'ahsan habib', 'tusar ahmed', 'mamun', 'sharif boss']

let myFriend = bestFriend(allFriend);
console.log(myFriend)