/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    var ans = people.length
    var so = people.sort((a,b)=>a-b)
    var l =so.length
    var end = l-1
    for(let i =0 ; i<l;i++){
        for(let j=end;i<j;j--){
            if(so[i]+so[j]<=limit){
                ans--
                so[i]=limit
                so[j]=limit
                end=j-1
                break;
            }
        }
        
    }
    return ans
};