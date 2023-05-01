import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { makeStyles } from "@mui/styles";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";
const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    minWidth: "50%",
};

const useStyle = makeStyles(() => ({
    text: {
        fontFamily: "Baloo Tamma 2",
    },
}));

function fileUpload({ toggleUpload, setToggleUpload }) {
    const classes = useStyle();
    const [upload, setUpload] = useState(true);
    const [details, setDetails] = useState(false);
    const [confirm, setConfirm] = useState(false);
    const [file, setFile] = useState();
    const [name, setName] = useState();
    const [MobileNo, setMobileNo] = useState();
    const [address, setAddress] = useState();
    const [placeOrderStatus, setPlaceOrderStatus] = useState(null);

    const handleClose = () => setToggleUpload(false);

    const sendFileUpload = async (e) => {
        e.preventDefault();
        const fileInput = file;
        const formData = new FormData();

        formData.append("file", fileInput);

        const url = "/api/handleFileUpload";
        const options = {
            method: "POST",
            body: formData,
        };

        const response = await fetch(url, options);
        // const res = await response.json(); //extract JSON from the http response
        // console.log("upload response is ", res);
    };

    const placeOrder = async (e) => {
        e.preventDefault();
        const url = "/api/handlePlaceOrder";
        const options = {
            method: "POST",
            body: JSON.stringify({
                CustomerName: name,
                MobileNo: MobileNo,
                Street: "test",
                Locality: "test",
                City: "chennai",
                PinCode: "606401",
                State: "Tamil Nadu",
                PrescriptionImage: "/Upload/qnqan.png",
            }),
        };
        const response = await fetch(url, options);
        const res = await response.json(); //extract JSON from the http response
        setPlaceOrderStatus(!res.success.isError);
    };

    const handleFileChange = (e) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
    };

    return (
        <>
            <Modal
                open={toggleUpload}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div>
                        <h2 className={classes.text}>Upload Prescription</h2>
                    </div>
                    <div className="header-seperator-line"></div>
                    <div className="header-button-wise-container">
                        <div className="file-upload-modal-header">
                            <button
                                className={
                                    upload ? "active-file-header-text" : "file-upload-header-text"
                                }
                                // onClick={() => {
                                //     setUpload(true);
                                //     setDetails(false);
                                //     setConfirm(false);
                                // }}
                            >
                                Upload
                            </button>
                            <button
                                className={
                                    details ? "active-file-header-text" : "file-upload-header-text"
                                }
                                // onClick={() => {
                                //     setUpload(false);
                                //     setDetails(true);
                                //     setConfirm(false);
                                // }}
                            >
                                Details
                            </button>
                            <button
                                className={
                                    confirm ? "active-file-header-text" : "file-upload-header-text"
                                }
                                // onClick={() => {
                                //     setUpload(false);
                                //     setDetails(false);
                                //     setConfirm(true);
                                // }}
                            >
                                Confirm
                            </button>
                        </div>
                        <div style={{ margin: "20px" }}>
                            <div className="header-and-content-seperator"></div>
                            {upload && (
                                <div>
                                    <form action="#" onSubmit={sendFileUpload}>
                                        <div>Prescription file input</div>
                                        <div>
                                            <input type="file" onChange={handleFileChange} />
                                        </div>
                                        <div className="prescription-upload-indtruction">
                                            <div className={classes.text} style={{}}>
                                                <h2>Prescription Upload Instruction :</h2>
                                            </div>
                                            <div>
                                                <ul>
                                                    <li>
                                                        Ensure that the entire prescription is
                                                        visible (including the doctor/clinic’s
                                                        letterhead)
                                                    </li>
                                                    <li>Upload only .jpg, .png or .pdf files</li>
                                                    <li>Maximum File Size 5MB</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div>
                                            <button
                                                className="prescription-upload-next-button"
                                                onClick={() => {
                                                    setUpload(false);
                                                    setDetails(true);
                                                    // sendFileUpload();
                                                }}
                                            >
                                                Next
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            )}
                            {details && (
                                <div>
                                    <form>
                                        <div className="Details-fill-form">
                                            <TextField
                                                label="Name"
                                                style={{ marginBottom: "1vw" }}
                                                onChange={(e) => setName(e.target.value)}
                                            />
                                            <TextField
                                                label="Mobile Number"
                                                onChange={(e) => setMobileNo(e.target.value)}
                                            />
                                        </div>
                                        <div>
                                            <button
                                                className="prescription-upload-next-button"
                                                onClick={() => {
                                                    setDetails(false);
                                                    setConfirm(true);
                                                }}
                                            >
                                                Confirm
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            )}
                            {confirm && (
                                <div>
                                    <form action="#" onSubmit={placeOrder}>
                                        <div className="Details-fill-form">
                                            <TextField
                                                label="Address and Confirm"
                                                style={{ marginBottom: "1vw" }}
                                                onChange={(e) => setAddress(e.target.value)}
                                            />
                                        </div>
                                        <div>
                                            {placeOrderStatus ? (
                                                <button
                                                    className="prescription-upload-next-button"
                                                    onClick={() => {
                                                        setToggleUpload(false);
                                                        setPlaceOrderStatus();
                                                        setConfirm(false);
                                                        setUpload(true);
                                                    }}
                                                >
                                                    Close
                                                </button>
                                            ) : (
                                                <button
                                                    className="prescription-upload-next-button"
                                                    // onClick={placeOrder}
                                                >
                                                    Confirm
                                                </button>
                                            )}
                                        </div>
                                    </form>

                                    {placeOrderStatus && (
                                        <Stack sx={{ width: "100%" }} spacing={2}>
                                            <Alert severity="success">
                                                Your order is successfully placed, delivery in 5-7
                                                days😊
                                            </Alert>
                                        </Stack>
                                    )}
                                    {placeOrderStatus=='false' && (
                                        <Stack sx={{ width: "100%" }} spacing={2}>
                                            <Alert severity="error">
                                                Something went wrong, please try again!
                                            </Alert>
                                        </Stack>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </Box>
            </Modal>
        </>
    );
}

export default fileUpload;
