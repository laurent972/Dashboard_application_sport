
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







