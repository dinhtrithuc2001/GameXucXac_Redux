const stateChiTiet = {
    maSP: 1,
    tenSP: "VinSmart Live",
    manHinh: "AMOLED, 6.2, Full HD+",
    heDieuHanh: "Android 9.0 (Pie)",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 5700000,
    hinhAnh: "./ImagePhone/vsphone.jpg"
}

export const ChiTietReducer = (state = stateChiTiet, action) => {
    let {type, payload} = action
    switch(type){
        case 'HIEN_THI_CHI_TIET': {
            state = {...payload}
            return {...state}
        }
        default: {
            return {...state}
        }
    }
    
}