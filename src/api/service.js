/**
 * Fucntions getting data from api
 * @param  {number} id
 */

// user Profil



export let userInfo= {"id":28,"userInfos":{"firstName":"Maurice","lastName":"Dovineau","age":31},"todayScore":0.99,"keyData":{"calorieCount":52,"proteinCount":155,"carbohydrateCount":290,"lipidCount":50}}
export async function GetUserInfos(id) {
    let response = await fetch(`http://localhost:3000/user/${id}`)
    if (response.ok) {
      let result = await response.json();
      return userInfo = result.data
    }
    return userInfo
};


// user's activity
export let userActivity= {"userId":15,"sessions":[{"day":"2020-07-01","kilogram":2,"calories":3},{"day":"2020-07-02","kilogram":120,"calories":220},{"day":"2020-07-03","kilogram":150,"calories":280},{"day":"2020-07-04","kilogram":81,"calories":290},{"day":"2020-07-05","kilogram":80,"calories":160},{"day":"2020-07-06","kilogram":78,"calories":162},{"day":"2020-07-07","kilogram":76,"calories":390}]}

export async function GetUserActivity(id) {
  let response = await fetch(`http://localhost:3000/user/${id}/activity`)
    if (response.ok) {
      let result = await response.json();
      return userActivity = result.data
    }
     return userActivity   
};



// user's perf
export let userPerformance = {"userId":12,"kind":{"1":"cardio","2":"energy","3":"endurance","4":"strength","5":"speed","6":"intensity"},"data":[{"value":160,"kind":1},{"value":120,"kind":2},{"value":140,"kind":3},{"value":145,"kind":4},{"value":200,"kind":5},{"value":160,"kind":6}]};
export async function GetUserPerformance(id) {
    let response = await fetch(`http://localhost:3000/user/${id}/performance`)
    if (response.ok) {
      let result = await response.json();
      return userPerformance = result.data
    }
    return userPerformance   
};


// user's performance (energy, endurance, etc.)
export let userSessions= {"userId":12,"sessions":[{"day":1,"sessionLength":30},{"day":2,"sessionLength":30},{"day":3,"sessionLength":30},{"day":4,"sessionLength":30},{"day":5,"sessionLength":30},{"day":6,"sessionLength":0},{"day":7,"sessionLength":60}]}

export async function GetUserSession(id) {
   let response = await fetch(`http://localhost:3000/user/${id}/average-sessions`)
   if (response.ok) {
      let result = await response.json();
      return userSessions = result.data
    }
    return userSessions   
};
