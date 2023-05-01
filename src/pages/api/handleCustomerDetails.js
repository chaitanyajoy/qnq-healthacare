const handler = async (req, res) => {
    //fetch options
    const options = {
        method: "GET",
        headers: {
            "content-type": "application/json",
            cusrefid: req.headers.cusrefid,
        },
    };

    //fetch url
    const url = `https://qnqhealthcare.com/qnqerpws/ws/getcustomerbyid`;

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
