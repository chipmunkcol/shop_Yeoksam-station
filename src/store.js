import React from 'react';
import { configureStore, createSlice } from '@reduxjs/toolkit';

const data = createSlice({
    name: 'jsonData',
    initialState: [
        {id: 3, title: '우영우김밥', content: '우영우의 주식 맛있다', price: 3000, count:1, detail: '우영우 아빠가 만든 김밥, 아침에 먹어도 속이 편하다.'},
        {id: 4, title: '우영우김초밥', content: '고오급 김초밥', price: 10000, count:1, detail: '우영우 김밥 고급버전, 이라기보다 그냥 다른 메뉴다 사케랑 잘 어울린다'},
        {id: 5, title: '흑동고래', content: '우영우의 고래', price: 1000000, count:1, detail: '사용하면 어디서든 큰 고래를 볼 수 있다, 머리에 번뜩이는 아이디어가 떠오른다(1회용)'}
        ],
    reducers: {
        jsonData(state, action) {

        }
    }
})

export let { jsonData } = data.actions

const cart = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addCart(state, action) {
        let a = state.findIndex((val)=>val.id === action.payload.id)  
            a === -1 ? state.push(action.payload) : state[a].count += 1 //findIndex에서 id로 장바구니 검색해서 있으면 수량+1, 없으면 해당상품 추가
            
        },
        removeCart(state, action) {
        let a = state.findIndex((val)=>val.id === action.payload.id)
            state.splice(a,1)
        },

        addCount(state, action) {
        let a = state.findIndex((val)=>val.id === action.payload.id)  
            state[a].count += 1
        },
        removeCount(state, action) {
        let a = state.findIndex((val)=>val.id === action.payload.id) 
            if(state[a].count !== 1){
                state[a].count -= 1
            }
        }
    }
})

export let { addCart, removeCart, addCount, removeCount } = cart.actions


export default configureStore({
    reducer: {
        data : data.reducer,
        cart : cart.reducer,
    },
})