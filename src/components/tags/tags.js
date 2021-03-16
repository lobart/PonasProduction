import React from "react";
import {Badge, Col, Menu, Row} from "antd";

let Tags = (props) => {
    debugger
    let contMap =  props.tags.map( (el)=>{
        return(
            <Menu.Item key={el.name} style={{verticalAlign: "center", display: 'inline-flex', justifyContent: 'center'}}>
                <Row style={{ display: 'inline-flex', justifyContent: 'center'}} gutter={[16, 16]} >
                    <Col >
                        <Badge count={el.upvotes} />
                    </Col>
                    <Col>
                        {el.name}
                    </Col>
                    <Col>
                        <Badge count={el.downvotes} style={{ verticalAlign: "center",  backgroundColor: '#52c41a' }}/>
                    </Col>
                </Row>
            </Menu.Item>
        )
    });
    return(
        <Menu theme="dark"  mode="inline">
            {contMap}
        </Menu>
    )
}

export default Tags;