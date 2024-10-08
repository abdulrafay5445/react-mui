import React from 'react'

import {
    Box,
    AppBar,
    Toolbar,
    IconButton,
    Typography, Icon,
    Button, Link
} from '@mui/material'
import LOGO from "../src/assets/Logo.png"
import HeroImg from "../src/assets/hero.png"

const Nexcent = () => {
    return (
        < >
        <Box  sx={{ backgroundColor: "#F5F7FA", }}>
            <Box sx={{ flexGrow: 1 }} >
                <AppBar position="static"  sx={{ backgroundColor: "#F5F7FA", }}   >
                    <Toolbar sx={{ display: "flex", justifyContent: "space-between" }} className="container">
                        <img src={LOGO} alt="" />

                        <Box sx={{ display: "flex" }} >
                            <Link className='mx-3 text-black' href="#" underline="none">
                                <Typography variant='body1'> Home</Typography>
                            </Link>
                            <Link className='mx-3 text-black' href="#" underline="none">
                                <Typography variant='body1'> Service</Typography>
                            </Link>
                            <Link className='mx-3 text-black' href="#" underline="none">
                                <Typography variant='body1'> Feature</Typography>
                            </Link>
                            <Link className='mx-3 text-black' href="#" underline="none">
                                <Typography variant='body1'> Product</Typography>
                            </Link>
                            <Link className='mx-3 text-black' href="#" underline="none">
                                <Typography variant='body1'> Testimonial</Typography>
                            </Link>
                            <Link className='mx-3 text-black' href="#" underline="none">
                                <Typography variant='body1'> FAQ</Typography>
                            </Link>
                        </Box>
                        <Box>
                            <Button className='text-success' color="inherit">Login</Button>
                            <Button variant="contained" color="success">
                                Sign up
                            </Button>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>

            
                <Box className="container mt-5 " >
                    <Box className="row align-items-center">
                        <Box className="col-lg-7 col-md-6 col-sm-12">
                            <h1 className='display-4 fw-bold'>Lessons and insights <br /> <span className='text-success'>from 8 years</span></h1>
                            <p className='text-secondary'>Where to grow your business as a photographer: site or social media?</p>
                            <button className='py-3 px-4 fs-5 border-0 text-white bg-success'>Register</button>
                        </Box>
                        <Box className="col-lg-5 col-md-6 col-sm-12">
                            <img src={HeroImg} alt="" />
                        </Box>
                    </Box>
                </Box>
            </Box>

        </>
    )
}

export default Nexcent