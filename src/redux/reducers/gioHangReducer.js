const stateGioHang = {
	gioHang: []
};
export const GioHangReducer = (state = stateGioHang, action) => {
	let { type, payload } = action;
	
	let gioHang = [...state.gioHang];
	switch (type) {
		case 'THEM_SAN_PHAM': {

			let sanPham = gioHang.find(item => item.maSP === payload.maSP)
			if (sanPham) {
				sanPham.soLuong += 1;
			} else {
				sanPham = { ...payload, soLuong: 1 };
				gioHang.push(sanPham);
			}
			return { ...state, gioHang }
		}

		case 'XOA_SAN_PHAM': {
			gioHang = gioHang.filter(item => item.maSP !== payload.maSP)
			return { ...state, gioHang }
		}

		case 'CAP_NHAP_SO_LUONG': {
			let sanPham = gioHang.find(item => item.maSP == payload.maSP); 
			sanPham.soLuong += payload.soLuong;
			if (sanPham.soLuong == 0 && payload.soLuong == -1) {
				sanPham.soLuong = 1;
			}
			return { ...state, gioHang }
		}
		default: {
			return { ...state }
		}
	}

};


