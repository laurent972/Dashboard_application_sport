/**
 * Fucntions getting data from api
 * @param  {number} id
 */

// user Profil
export let userInfo= []

export async function GetUserInfos(id) {
    await fetch(`http://localhost:3000/user/${id}`)
       .then(response => response.json())
       .then((response) => userInfo = response.data)
       .catch(err => {
        console.log(err);
      });
    return userInfo   
};


// user's activity
export let userActivity= []
export async function GetUserActivity(id) {
    await fetch(`http://localhost:3000/user/${id}/activity`)
       .then(response => response.json())
       .then((response) => userActivity = response.data)
       .catch(err => {
        console.log(err);
      });
    return userActivity   
};

// user's perf
export let userPerformance= []
export async function GetUserPerformance(id) {
    await fetch(`http://localhost:3000/user/${id}/performance`)
       .then(response => response.json())
       .then((response) => userPerformance = response.data)
       .catch(err => {
        console.log(err);
      });
    return userPerformance   
};


// user's performance (energy, endurance, etc.)
export let userSessions= []
export async function GetUserSession(id) {
    await fetch(`http://localhost:3000/user/${id}/average-sessions`)
       .then(response => response.json())
       .then((response) => userSessions = response.data)
       .catch(err => {
        console.log(err);
      });
    return userSessions   
};
