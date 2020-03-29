import {
  HOME,FOLLOW,COLUMN,BANNER,USER,UPDATE_FOOT,UPDATE_LOADING,UPDATE_NAV,DETAIL
} from './types';

export default {
  [UPDATE_NAV]:(state,payload)=>state.bNav=payload,
  [UPDATE_FOOT]:(state,payload)=>state.bFoot=payload,
  [UPDATE_LOADING]:(state,payload)=>state.bLoading=payload,
  
  [HOME]:(state,payload)=>state.home=payload,
  [BANNER]:(state,payload)=>state.banner=payload,
  [FOLLOW]:(state,payload)=>state.follow=payload,
  [COLUMN]:(state,payload)=>state.column=payload,
  [DETAIL]:(state,payload)=>state.detail=payload,
  
  
  [USER]:(state,payload)=>state.user=payload,
  
}

/* let a=12;
a;
window.a

window['a']

let bulala='a';

window[bulala] */