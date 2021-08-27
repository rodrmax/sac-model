import BrandEnum from './brand';

export const HeaderFooter = (brand) => {

    const canal = BrandEnum()

    if(brand === canal.p){
        return "rgb(136, 176, 75)"
    }else if(brand === canal.ex){
        return "#e81c30"
    }else{
        return "rgb(108,117,125)"
    }
}

export const FrequentDoubtBG = (brand) => {

    const canal = BrandEnum()

    if(brand === canal.p){
        return "rgba(136, 176, 75, 0.1)"
    }else if(brand === canal.ex){
        return "rgba(232, 28, 50, 0.1)"
    }else{
        return "rgba(108, 117, 125, 0.1)"
    }
}