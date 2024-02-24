export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //Remove after donw with the project
    //token: 'AGPr0ZfMmgG6ZgPfK5_KBogp1NY77kfTBFTRQdUnsdhK8CDFzyi7D5KsKTLxN7x4tDI2Jyc0XABQotOq3ZLuBBF13eRNnoGKGWXvNC5iO5q8pFzH1xZkXq1Pzg4HwTBsl4BP3BVFwi2sjJsW_D37jAL8Mlwv55lm2q05Pe5FyivUwGmcd3LHJlcKirNcPiRC8J40jxZ1t44RS4'
    
};

const reducer = (state, action) => {

    console.log(action);

    switch (action.type) {
        case 'SET_USER':
            return{
                ...state,
                user: action.user
            };

        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            };
            
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            };

        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            }

        default:
            return state;
    }

}

export default reducer;