const handler = async (req, res) => {
    //fetch options
    const options = {
        method: "POST",
        body: req.body,
    };

    //fetch url
    const url = `http://qnqhealthcare.com/MFileUpload/UploadServlet`;

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