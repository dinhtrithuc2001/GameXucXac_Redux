import React, { Component } from 'react'
import { connect } from 'react-redux'

class BaiTapXucXac extends Component {
    state = {
        rolling: ""
    }

    ThayDoiCuoc = (bool) => {
        this.props.dispatch({
            type: "THAY_DOI_CUOC",
            payload: bool
        })
    }

    ketQua = () => {

        this.props.dispatch({
            type: "KET_QUA",
        });

        this.setState({
            rolling: "rollss"
        })
        setTimeout(() => {
            this.setState({
                rolling: ""
            })
        }, 400);
    }

    render() {
        let { isChan, arrayKetQua, ketQuaNut, soBanThang, tongBanChoi } = this.props.xucXac;
        return (
            <div className='w-[100%] h-screen relative' style={{ backgroundImage: `url(./ImgXucXac/bgGame.png)` }}>
                <h1 className='font-medium pt-10 text-5xl text-center absolute w-full'>Game đổ xúc xắc</h1>
                <div className='container absolute'>
                    <div className='flex items-center justify-evenly h-screen '>
                        <button onClick={() => this.ThayDoiCuoc(true)} className={`${isChan ? 'bg-orange-400 text-white' : 'bg-yellow-200'} tracking-wider duration-300 text-xl hover:bg-orange-400 hover:text-white font-[500] py-3 px-10 rounded`}>Chẵn</button>
                        <img className={`rounded-3xl ${this.state.rolling}`} src={arrayKetQua[0]} />
                        <img className={`rounded-3xl ${this.state.rolling}`} src={arrayKetQua[1]} />
                        <img className={`rounded-3xl ${this.state.rolling}`} src={arrayKetQua[2]} />
                        <button onClick={() => this.ThayDoiCuoc(false)} className={`${isChan ? 'bg-yellow-200' : 'bg-orange-400 text-white'} tracking-wider duration-300 text-xl hover:bg-orange-400 hover:text-white  font-[500] py-3 px-10 rounded`}>Lẻ</button>
                    </div>
                </div>
                <div className='absolute bottom-10 w-full text-center'>
                    <div className='text-bold text-3xl text-white tracking-wider bg-orange-400/80 w-[50%] mx-auto rounded mt-3 py-1'>
                        <h1>Kết quả nút: {ketQuaNut}</h1>
                        <h1>Bạn chọn: {isChan ? "Chẵn" : "Lẻ"}</h1>
                        <h1>Số bàn thắng: {soBanThang}</h1>
                        <h1>Tổng số bàn chơi: {tongBanChoi}</h1>
                    </div>
                    <button onClick={() => this.ketQua()} className='bg-yellow-200 tracking-wider mt-5 text-xl duration-300 hover:bg-orange-400 hover:text-white text-black font-[500] py-3 px-10 rounded' >Play game</button>
                </div>
            </div>
        )
    }
}


const mapStateToProp = (state) => {
    return {
        xucXac: state.XucXacReducer
    }
}

export default connect(mapStateToProp, null)(BaiTapXucXac);