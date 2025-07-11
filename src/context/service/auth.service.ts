export interface middleUserFetchType {
    id : string
    username :string
    user_email:string
    profile_picture_url : string
    role : string
    createAt : string
    updateAt : string
}

export async function middleUserFetch(url:string) {
    const response = await fetch(url, {
        method : "GET",
        credentials : "include",
        headers :{
            "Content-Type" : "application/json"
        },
    })

    if (response.ok) {
        const userdata:middleUserFetchType = await response.json();
        return {status : true, userdata }
    } 
    return {status : false, userdata : null }
}
