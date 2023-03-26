const handler = async (req, res) => {
    //fetch options
    const options = {
        method: "GET",
        headers: {
            companyid: "917d8aa2-7c4e-4282-b27f-0beb0228ac7b",
            "content-type": "application/json",
            "Access-Control-Allow-Origin": "*",
            info: req.headers.info,
        },
    };

    //fetch url
    const url = `http://qnqhealthcare.com/qnqerpws/ws/sendotp`;

    // fetch request
    try {
        const response = await fetch(url, options);
        const data = await response.json();
        return res.end(JSON.stringify({ "success": data }));
    } catch (error) {
        return res.end(JSON.stringify({ "error": error.msg }));
    }
};

export default handler;
