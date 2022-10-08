import React, { Component } from 'react'
import { connect } from 'react-redux'
class GioHang extends Component {
    render() {
        let {gioHang} = this.props;
        return (
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" style={{ maxWidth: 900 }}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text-center" id="exampleModalLabel">Giỏ hàng</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th>Mã sản phẩm</th>
                                        <th>Hình ảnh</th>
                                        <th>Số lượng</th>
                                        <th>Đơn giá</th>
                                        <th>Thành tiền</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {gioHang.map((sp, index) => {
                                        return <tr key={index}>
                                            <td>{sp.maSP}</td>
                                            <td>
                                                <img className='img-fluid' style={{ width: 50 }} src={sp.hinhAnh} alt="" />
                                            </td>
                                            <td>
                                                <button onClick={() => this.props.dispatch({
                                                    type:'CAP_NHAP_SO_LUONG',
                                                    payload: {maSP: sp.maSP, soLuong: 1},
                                                    
                                                })} className='btn btn-success'>+</button>
                                                <span className='mx-2'>{sp.soLuong}</span>
                                                <button onClick={() => this.props.dispatch({
                                                    type:'CAP_NHAP_SO_LUONG',
                                                    payload: {maSP: sp.maSP, soLuong: -1},
                                                    
                                                })} className='btn btn-success'>-</button>
                                            </td>
                                            <td>
                                                {sp.giaBan.toLocaleString()}
                                            </td>
                                            <td>
                                                {(sp.giaBan * sp.soLuong).toLocaleString()}
                                            </td>
                                            <td>
                                                <button onClick={() => this.props.dispatch({
                                                    type: 'XOA_SAN_PHAM',
                                                    payload: sp
                                                })} className='btn btn-danger'>Xóa</button>
                                            </td>
                                        </tr>
                                    })}
                                </tbody>
                            </table>
                        </div>
                        <div className="modal-footer justify-content-end">
                            <h5 className='text-center'>Tổng tiền : {gioHang.reduce((tong, item) => tong += item.giaBan * item.soLuong, 0).toLocaleString()} VND
                            </h5>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        gioHang: state.GioHangReducer.gioHang
    }
}

export default connect(mapStateToProps, null)(GioHang)