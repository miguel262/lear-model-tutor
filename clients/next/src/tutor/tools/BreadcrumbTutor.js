import React from 'react'
//import {Breadcrumb,Card} from 'react-bootstrap'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
  } from "@chakra-ui/react"

export const BreadcrumbTutor = ({root,item}) => {
    return (
            <>
            {/*<Card style={{padding:0, background:"#21232A"}} border="secondary">
            <Breadcrumb>
                <Breadcrumb.Item style={{color:"black"}}>{root}</Breadcrumb.Item>
                <Breadcrumb.Item active style={{color:"gray"}}>{item}</Breadcrumb.Item>
            </Breadcrumb>
            </Card>
    <br></br>*/}

            <Breadcrumb>
                <BreadcrumbItem>
                    <BreadcrumbLink>{root}</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <BreadcrumbLink>{item}</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
            <br/>
            </>
    )
}