import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { maxWidth } from "@mui/system";
import { makeStyles } from "@mui/styles";
import { Button, Grid, Alert } from "@mui/material";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import FormControl from "@mui/material/FormControl";
import { useGlobalContext } from "@/components/contexts/GlobalContext";

import Snackbar, { SnackbarOrigin } from "@mui/material/Snackbar";
import CircularProgress from "@mui/material/CircularProgress";

const useStyle = makeStyles((theme) => ({
    textField1: {
        display: "flex",
        flexDirection: "row",
        marginLeft: "auto",
        marginRight: "auto",
        paddingBottom: 0,
        marginTop: 0,
        fontWeight: 500,
    },
    textField2: {
        marginLeft: "auto",
        marginRight: "auto",
        paddingBottom: 0,
        marginTop: 0,
        fontWeight: 500,
    },
    pageContent: {
        margin: "5px",
        padding: "3px",
    },
    page: {
        display: "flex",
    },
}));

const profileForm = () => {
    const classes = useStyle();
    // const { mobileNumber, setMobileNumber, custName } = useGlobalContext();
    const [mobileNumber, setMobileNumber] = useState();

    const [customerName, setCustomerName] = useState();
    const [address, setAddress] = useState();
    const [landmark, setLandmark] = useState();
    const [city, setCity] = useState();
    const [state, setState] = useState();
    const [pinCode, setPinCode] = useState();

    const [userDetailUploadStatus, setUserDetailUploadStatus] = useState();

    // console.log("User Name is ", custName

    useEffect(() => {
        const userId = localStorage.getItem("customerId");
        const mobileNo = JSON.parse(localStorage.getItem("customerDetails")).MobileNo;
        getUserDetails(userId);
        setMobileNumber(mobileNo);
    }, []);

    const getUserDetails = async (userId) => {
        const url = "/api/handleCustomerDetails";
        const options = {
            method: "GET",
            headers: {
                // "content-type": "application/json",
                cusrefid: String(userId),
            },
        };

        const response = await fetch(url, options);
        const res = await response.json();
        if (res && res.success && res.success.output) {
            const userDetails = JSON.parse(res.success.output)[0];
            setCustomerName(userDetails.PrintName);
        }
    };

    const updateUserDetails = async (e) => {
        e.preventDefault();
        console.log("submit clicked");
        const url = "/api/handleUserUpdateProfile";
        const options = {
            method: "POST",
            body: JSON.stringify({
                CustomerName: customerName,
                MobileNo: mobileNumber,
                Address: address,
                Landmark: landmark,
                City: city,
                PinCode: pinCode,
                State: state,
                Id: localStorage.getItem("customerId"),
            }),
        };

        // console.log("User options is", options)
        const response = await fetch(url, options);
        const res = await response.json();
        if (res && res.success) {
            setUserDetailUploadStatus(!res.success.isError);
        }
        console.log("update user profile res is", res.success.isError);
    };
    return (
        <div style={{ display: "flex", paddingTop: "8px", width: "100%" }}>
            <img
                src="/assets/img/profile/profilePicture.jpg"
                alt="services-thumb"
                width="600"
                marginRight="15px"
            />
            <Box
                component="form"
                sx={{
                    "& .MuiTextField-root": { m: 1 },
                    boxShadow: 1,
                    marginTop: "20px",
                    width: "55%",
                    maxWidth: "55%",
                    paddingLeft: "1vw",
                }}
                noValidate
                autoComplete="off"
                onSubmit={(e) => {
                    updateUserDetails(e);
                }}
            >
                <Grid>
                    <Grid style={{ display: "flex" }}>
                        <TextField
                            required
                            sx={{ width: "50%" }}
                            id="name"
                            label="Name"
                            defaultValue=""
                            onChange={(e) => {
                                setCustomerName(e.target.value);
                            }}
                        />
                        <TextField
                            sx={{ width: "50%" }}
                            id="mobileNo"
                            label="Mobile No"
                            defaultValue=""
                            value={mobileNumber}
                            InputLabelProps={{ shrink: true }}
                        />
                    </Grid>
                    <Grid style={{ width: "100%" }}>
                        <TextField
                            fullWidth
                            sx={{ paddingRight: "1.1vw" }}
                            id="address"
                            label="Address"
                            onChange={(e) => {
                                setAddress(e.target.value);
                            }}
                        />
                    </Grid>
                    <Grid style={{ display: "flex" }}>
                        <TextField
                            sx={{ width: "50%" }}
                            id="landmark-input"
                            label="Landmark"
                            onChange={(e) => {
                                setLandmark(e.target.value);
                            }}
                        />
                        <TextField
                            sx={{ width: "50%" }}
                            id="city"
                            label="City"
                            onChange={(e) => {
                                setCity(e.target.value);
                            }}
                        />
                    </Grid>
                    <Grid style={{ display: "flex" }}>
                        <TextField
                            sx={{ width: "50%" }}
                            id="pincode"
                            label="Pin code"
                            onChange={(e) => {
                                setPinCode(e.target.value);
                            }}
                        />
                        <TextField
                            sx={{ width: "50%" }}
                            id="state"
                            label="State"
                            onChange={(e) => {
                                setState(e.target.value);
                            }}
                        />
                    </Grid>
                    <Button
                        sx={{ width: "98%", height: "3.8vw", margin: "8px" }}
                        variant="outlined"
                        type="submit"
                        // onClick={(e) => {
                        //     updateUserDetails(e);
                        // }}
                    >
                        Update
                    </Button>
                </Grid>
                {userDetailUploadStatus && (
                    <div>
                        <Stack sx={{ width: "100%" }} spacing={2}>
                            <Alert severity="success">Updated successfully</Alert>
                        </Stack>
                    </div>
                )}
                {userDetailUploadStatus == "false" && (
                    <div>
                        <Stack sx={{ width: "100%" }} spacing={2}>
                            <Alert severity="error">Something went wrong!</Alert>
                        </Stack>
                    </div>
                )}
            </Box>
        </div>
    );
};
export default profileForm;
