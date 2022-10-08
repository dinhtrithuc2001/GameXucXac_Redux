const stateXucXac = {
    isChan: true,
    arrayHinh: ['./ImgXucXac/1.png', './ImgXucXac/2.png', './ImgXucXac/3.png', './ImgXucXac/4.png', './ImgXucXac/5.png', './ImgXucXac/6.png'],
    arrayKetQua: ['./ImgXucXac/1.png', './ImgXucXac/2.png', './ImgXucXac/3.png'],
    ketQuaNut: 0,
    soBanThang: 0,
    tongBanChoi: 0,
}



export const XucXacReducer = (state = stateXucXac, action) => {
    let {type, payload} = action
    switch(type){
        case 'THAY_DOI_CUOC': 
        {
            state.isChan = payload;
            return {...state}
        }
        case 'KET_QUA':{
            let {arrayHinh, soBanThang, tongBanChoi, isChan } = state;

            let arrayNew = [];

            let ketQuaNut = 0;
    
            for (let i = 0; i < 3; i++) {
                let randomIndex = Math.floor(Math.random() * 6)
                ketQuaNut += randomIndex + 1;
                arrayNew.push(arrayHinh[randomIndex]);
            }
    
            if (isChan) {
                if (ketQuaNut % 2 == 0) {
                    soBanThang += 1;
                }
            } else {
                if (ketQuaNut % 2 != 0) {
                    soBanThang += 1;
                }
            }
            return {...state, arrayKetQua: arrayNew,ketQuaNut,soBanThang,tongBanChoi: tongBanChoi + 1 }
        }
        default: {
            return {...state}
        }
    }
}