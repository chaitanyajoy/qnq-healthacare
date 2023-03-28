const handler = async (req, res) => {
    const options = {
        method: "POST",
        body: JSON.stringify({
            CustomerName: JSON.parse(req.body).CustomerName,
            MobileNo: JSON.parse(req.body).MobileNo,
            Street: JSON.parse(req.body).Street,
            Locality: JSON.parse(req.body).Locality,
            City: JSON.parse(req.body).City,
            PinCode: JSON.parse(req.body).PinCode,
            State: JSON.parse(req.body).State,
            PrescriptionImage: JSON.parse(req.body).PrescriptionImage,
        }),
    };

    //fetch url
    const url = `https://qnqhealthcare.com/qnqerpws/ws/addweborderconfirm`;

    // fetch request
    try {
        const response = await fetch(url, options);
        const data = await response.json();
        console.log("data is ", data);
        return res.end(JSON.stringify({ success: data }));
    } catch (error) {
        return res.end(JSON.stringify({ error: error.msg }));
    }
};

export default handler;
