import React, { Component } from 'react';
import { Form, Input, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete, Space } from 'antd';

class ThanhToan extends Component {
    constructor() {
        super();
        this.state = {
            name: 'xx',
            pass: '123',
            moTa: '44',
            loai: 2,
            ngonNgu: 'vi',
            tonGiao: true
        }
    }

    onTextChange = (event) => {
        let name = event.target.name;
        let value = event.target.type != 'checkbox' ? event.target.value : event.target.checked;
        this.setState({ [name]: value });
    }

    onSubmitF = (event) => {
        event.preventDefault();
        console.log('submit', this.state);

    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitF}>
                    <Space direction="vertical">
                        <label>Nhap ten:
                            <input type="text" name="name" value={this.state.name} onChange={this.onTextChange}></input>
                        </label>
                        <label>pass:
                            <input type="text" name="pass" value={this.state.pass} onChange={this.onTextChange}></input>
                        </label>
                        <label>Mo ta:
                            <textarea name="moTa" value={this.state.moTa} onChange={this.onTextChange}></textarea>
                        </label>
                        <label>Goi Tinh:
                            <select name="loai" value={this.state.loai} onChange={this.onTextChange}>
                                <option value="1">Nam</option>
                                <option value="2">Nu</option>
                            </select>
                        </label>
                        <lable>Ngon Ngu:
                            <lable>
                                <input type="radio" name="ngonNgu" value="en" checked={this.state.ngonNgu === 'en'} onChange={this.onTextChange}></input>
                                Tieng Anh
                            </lable>
                            <lable>
                                <input type="radio" name="ngonNgu" value="vi" checked={this.state.ngonNgu === 'vi'} onChange={this.onTextChange}></input>
                                Tieng Viet
                            </lable>
                        </lable>
                        <label>
                            Ton giao:
                            <input type="checkbox" name="tonGiao" value={this.state.tonGiao} checked={this.state.tonGiao} onChange={this.onTextChange} ></input>
                        </label>
                        <button type="submit" >Submit</button>
                        <button type="reset" >Reset</button>
                    </Space>
                </form>
            </div>
        );

    }
}

export default ThanhToan;

