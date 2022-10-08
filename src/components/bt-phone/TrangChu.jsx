import React, { Component } from 'react'
import DanhSachSanPham from './DanhSachSanPham'
import GioHang from './GioHang'
import ChiTietSanPham from './ChiTietSanPham'
import {connect} from 'react-redux'
 class TrangChu extends Component {
    render() {
        let {gioHang, } = this.props;
        return (
            <div className='container'>
                <h2 className='text-center mt-4'>Dedux</h2>
                <div className='text-primary text-end' >
                    <span style={{ cursor: 'pointer', fontSize:18 }} data-bs-toggle="modal" data-bs-target="#exampleModal">Giỏ hàng<i className="fa-solid fa-cart-shopping"></i>({gioHang.reduce((tong, item) => tong += item.soLuong, 0)})</span>
                </div>
                <DanhSachSanPham  />
                <ChiTietSanPham/>
                <GioHang />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        gioHang: state.GioHangReducer.gioHang
    }
}


export default connect(mapStateToProps, null)(TrangChu)