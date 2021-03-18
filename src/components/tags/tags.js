import React, {useState} from "react";
import {Badge, Button, Col, Input, Layout, Menu, Row} from "antd";

let Tags = (props) => {
    const [tempValue, setTempValue] = useState(null);
    let OnChangeName = (e) =>{
        props.setName(e.currentTarget.value);
    }
    let OnClickButton = () => {
        props.newName && props.postTag(props.newName);
        props.newName && props.setName('');
    }
    let onKeyDown = (e) => {
        let idTag = (props.tags.filter(obj => {
            return obj.name === e.key
        })[0].id);
        setTempValue(idTag);
    }
    let onKeyTagUp = () => {
        tempValue && props.upTag(tempValue);
    }
    let onKeyTagDown = () => {
        tempValue && props.downTag(tempValue);
    }
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
        <Menu theme="dark"  mode="inline" justifyContent='center'  onSelect={onKeyDown} defaultSelectedKeys={'btc'}>
            <Row style={{ justifyContent: 'center'}} gutter={[16, 16]} >
                <Col >
                    <Input onChange={OnChangeName} value={props.newName}  placeholder="Type new coin name" />
                </Col>
                <Col>
                    <Button onClick={OnClickButton}>+</Button>
                </Col>
            </Row>
            {contMap}
            <Row style={{justifyContent: 'center'}}>
                <Col>
                    <Button onClick={onKeyTagUp}>Up</Button>
                </Col>
                <Col>
                    <Button onClick={onKeyTagDown}>Down</Button>
                </Col>
            </Row>
        </Menu>
    )
}

export default Tags;