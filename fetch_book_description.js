let isbn = "9784873116860"
let ENDPOINT_OPENBD = `https://api.openbd.jp/v1/get?isbn=${isbn}`;

// 書籍の説明文を取得する
fetch(ENDPOINT_OPENBD, { method: "GET" })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        // 書籍の説明文を取得
        let description = data[0]["onix"]["CollateralDetail"]["TextContent"][0]["Text"];
        console.log(description);
    })
    .catch(error => {
        console.error("Error occured: ", error);
    });
