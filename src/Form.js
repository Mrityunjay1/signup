import React from 'react'
import { Box, Container, Heading, Text} from '@chakra-ui/layout'
import { Input, Stack, Checkbox} from "@chakra-ui/react"
import { useFormik } from 'formik'
import './button.css'
import {
    FormControl
} from "@chakra-ui/react"

export default function Form() {

    const formik=useFormik({
        initialValues:{
            email:'',
            name:'',
            password:'',

        },
        onSubmit:values=>{
            console.log('Form Data',values)
        },


        validate:values=>{
            let errors={}

            if(!values.email){
                errors.email='Required'
            }else if(!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(values.email)){
                errors.email='Invalid Email Format'
            }

            if(!values.name){
                errors.name='Required'
            }

            if(!values.password){
                errors.password='Required'
            }else if(!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(values.password)){
                errors.password="Minimum eight characters, at least one letter and one number"
            }



            return errors
        }
    })
    // console.log('visited',formik.touched)

    return (

        <Box bgColor="#f7f8fa" pt="10%" pb="15%" align="center">
            <Text fontFamily="Circular Std Book" fontSize="20" fontWeight="700">Omega</Text>
            <Container maxW="527" bgColor="white" align="center" mt="150" borderRadius="10">
                <Stack>
                    <Heading pt="15" fontFamily="Circular Std Book" fontSize="60" fontWeight="700">Sign Up</Heading>
                    <Text fontFamily="Circular Std Book">No credit card required</Text>
                </Stack>
                <form onSubmit={formik.handleSubmit} >
                    <Stack spacing={4} mt="50">
                        <FormControl id="email">
                            {/* <FormLabel>Email Address</FormLabel> */}
                            <Input placeholder="Email" type="email" name="email" onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur}/>
                            
                            {formik.touched.email && formik.errors.email ? <Text color="red" fontFamily="Circular Std Book" align="right">{formik.errors.email}</Text> : null}
                        </FormControl>
                        <FormControl id="email">
                            {/* <FormLabel>Company Name</FormLabel> */}
                            <Input placeholder="Company Name" type="name" name='name' onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur}/>
                            {formik.touched.name && formik.errors.name ? <Text color='red' fontFamily="Circular Std Book" align="right">{formik.errors.name}</Text> : null}
                        </FormControl>
                        <FormControl id="email">
                            {/* <FormLabel>Password</FormLabel> */}
                            <Input placeholder="Password" type="password" name='password' onChange={formik.handleChange} value={formik.values.password} onBlur={formik.handleBlur}/>
                            
                            {formik.touched.password && formik.errors.password ? <Text color="red" fontFamily="Circular Std Book" align="right">{formik.errors.password}</Text> : null}
                        </FormControl>

                        <Checkbox colorScheme="red" defaultIsChecked fontFamily="Circular Std Book"
                            fontSize="16">I agree to the Terms & Conditions</Checkbox>
                        {/* <FormControl id="button">
                            <Input type="button" name="submit" value="Get Started" bgColor="#f04037" fontFamily="Circular Std Book"/>
                        </FormControl> */}
                        <button type="submit" className="myButton">Get Started</button>
                        <Text fontSize="16" color="#696871" W="238" fontFamily="Circular Std Book"
                        >Already have an account? Sign in</Text>
                    </Stack>
                </form>
            </Container>
        </Box>
    )
}
