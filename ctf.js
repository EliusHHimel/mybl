
let url = "https://assetliteapi.banglalink.net/api/v1/user/otp-login/request"
let url2 = "https://assetliteapi.banglalink.net/api/v1/secret-token"

fetch(url2).then(res => res.json()).then(res => {
    console.log(res)
    let header = { secret_code: res.data.secret_code, _token: res.data._token }

    let data = { mobile: "01986461155" };

    console.log(data)

    fetch(url, {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }).then(res => {
        console.log("Request complete! response:", res);
    });

})
