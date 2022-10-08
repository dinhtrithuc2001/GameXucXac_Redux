import React, { Component } from 'react'
import SanPham from './SanPham'
import DataPhone from './DataPhone.json'

export default class DanhSachSanPham extends Component {
    render() {
        return (
            <div className='row'>
                {DataPhone.map((sp, index) => {
                    return <SanPham sp={sp} key={index} />
                })}
            </div>
        )
    }
}
