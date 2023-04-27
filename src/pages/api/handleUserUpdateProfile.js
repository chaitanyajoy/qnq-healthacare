const handler = async (req, res) => {
    //fetch options

    console.log("User details posted successfully");
    const options = {
        method: "POST",
        body: JSON.stringify({
            CustomerName: JSON.parse(req.body).CustomerName,
            MobileNo: JSON.parse(req.body).MobileNo,
            Address: JSON.parse(req.body).Address,
            Landmark: JSON.parse(req.body).Landmark,
            City: JSON.parse(req.body).City,
            PinCode: JSON.parse(req.body).PinCode,
            State: "Tamil Nadu",
            Id: JSON.parse(req.body).Id,
        }),
    };

    //fetch url
    const url = `http://qnqhealthcare.com/qnqerpws/ws/updateuser`;

    // fetch request
    try {
        const response = await fetch(url, options);
        const data = await response.json();
        return res.end(JSON.stringify({ success: data }));
    } catch (error) {
        return res.end(JSON.stringify({ error: error.msg }));
    }
};

export default handler;
