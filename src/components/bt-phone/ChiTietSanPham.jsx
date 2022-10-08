import React, { Component } from 'react'
import { connect } from 'react-redux';

class ChiTietSanPham extends Component {
    
    render() {
        let {chiTiet} = this.props
        return (
            <div className='row mt-5'>
                <div className='col-4'>
                    <h4 className='text-center m-0'>{chiTiet.tenSP}</h4>
                    <img src={chiTiet.hinhAnh} className='img-fluid' />
                </div>
                <div className='col-8'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th colSpan={2}>Thông số kỹ thuật</th>
                                <td></td>
                            </tr>
                            <tr>
                                <th>Mã sản phẩm</th>
                                <td>{chiTiet.maSP}</td>
                            </tr>
                            <tr>
                                <th>Màn hình</th>
                                <td>{chiTiet.manHinh}</td>
                            </tr>
                            <tr>
                                <th>Hệ điều hành</th>
                                <td>{chiTiet.heDieuHanh}</td>
                            </tr>
                            <tr>
                                <th>Camera trước</th>
                                <td>{chiTiet.cameraTruoc}</td>
                            </tr>
                            <tr>
                                <th>Ram</th>
                                <td>{chiTiet.ram}</td>
                            </tr>
                            <tr>
                                <th>Rom</th>
                                <td>{chiTiet.rom}</td>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        chiTiet: state.ChiTietReducer
    }
}

export default connect(mapStateToProps, null)(ChiTietSanPham)