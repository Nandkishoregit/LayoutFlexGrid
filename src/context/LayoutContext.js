import React, { useContext, useReducer } from 'react';

const LayoutContext = React.createContext();

const initialStateFlex = {
    numberOfSubContainers: 0,

    'layoutType': 'flex',
    "flexDirection": 'row',
    "flexWrap": 'nowrap',
    "justifyCountent": 'flex-start',
    "alignItems": 'flex-start',
    "alignContent": 'flex-start',

};

//to do later
// const initialStateGrid = {
//     numberOfSubContainers: 0,
//     'layoutType': 'flex',
//     flexDirection: 'row',
//     flexWrap: 'nowrap',
//     justifyCountent: 'flex-start',
//     alignItems: 'flex-start',
//     alignContent: 'flex-start',

//     //grid can be added later
//     'grid-template-columns': 'auto'

// };


const reducer = (state, action) => {
    switch (action.type) {
        case 'CREATE_FlEX_CONTAINER_PROPETIES': {
            console.log('CREATE_FlEX_CONTAINER_PROPETIES', action.payload);
            return {
                ...state,
                'layoutType': action.payload.layoutType,
                'flexDirection': action.payload.flexDirection,
                'flexWrap': action.payload.flexWrap,
                'justifyCountent': action.payload.justifyCountent,
                'alignItems': action.payload.alignItems,
                'alignContent': action.payload.alignContent
            };
        }
        // case 'DESTROY_SESSION':
        //     return { ...initialState, manualLogout: true };

        // case 'SET_AUTH_TOKEN': {
        //     // renew token
        //     return {
        //         ...state,
        //         authToken: action.payload.authToken,
        //         refreshToken: action.payload.authToken,
        //         expireTimeStamp: action.payload.refreshToken
        //     };
        // }


        default:
            throw new Error(`Unrecognized action type: ${action.type}`);
    }
};

export const isLoggedInSelector = state => !!state.authToken;

export const LayoutContextProvider = ({ children }) => {
    const sessionReducer = useReducer(reducer, initialStateFlex);
    return <LayoutContext.Provider value={sessionReducer}>{children}</LayoutContext.Provider>;
};

export const useLayoutContext = () => {
    const userSession = useContext(LayoutContext);
    if (userSession === undefined) {
        throw new Error(
            'useLayoutContext() hook could not read expected context. Did you forget to render <LayoutContextProvider> above it?'
        );
    }
    return userSession;
};
