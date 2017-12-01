import {Dimensions} from 'react-native';
let pixelRatio = Dimensions.get('window').width / 750;
export default class DpFactory{
    static i;
    static Dp = {};
    static getDp(){
        for(i=1;i<=750;i++){
            this.Dp["dp"+ i] = i * pixelRatio;
        }
        this.Dp["dp0_5"] = 0.5 * pixelRatio;
        return this.Dp;
    }
}