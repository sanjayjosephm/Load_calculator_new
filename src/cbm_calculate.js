// import React from "react";

let cbmSum = 200;

const feet_20 = {
    length: 589,
    width: 234,
    height: 238,
    max_cbm: 26,
};
  const feet_40 = {
    length: 1200,
    width: 234,
    height: 238,
    max_cbm: 58,
};
  const highcube_40 = {
    length: 1200,
    width: 234,
    height: 269,
    max_cbm: 68,
};


let feet20Sum = 0
let feet40Sum = 0
let hq40Sum = 0

function calculation(cbmSum){
    if(cbmSum <= feet_20.max_cbm){
        feet20Sum += 1
        console.log(`20ft container : ${feet20Sum}`)
    }
    // eslint-disable-next-line no-mixed-operators
    else if(feet_20.max_cbm < cbmSum && cbmSum <= feet_40.max_cbm){
        feet40Sum += 1
        console.log(`40ft container : ${feet40Sum}`)
    }
    else if(feet_40.max_cbm<cbmSum && cbmSum<=highcube_40.max_cbm){
        hq40Sum+=1
        console.log(`40gq container : ${hq40Sum}`)
    }
    else if(cbmSum>highcube_40.max_cbm){
        let temp1 = cbmSum/highcube_40.max_cbm
        // let temp2 = cbmSum%highcube_40.max_cbm
        calculation(temp1)
    }
}

calculation(cbmSum)

export default calculation