import { combineReducers, createStore } from 'redux';

const initState = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: ChangeThemeIdType): InitialStateType => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID':
            return {...state, themeId: +action.id}
        default:
            return state
    }
}

export const changeThemeId = (id: number): ChangeThemeIdType => ({ type: 'SET_THEME_ID', id }) // fix any
export const selectTheme = (state: RootState) => state.theme.themeId

type InitialStateType = typeof initState
type ChangeThemeIdType = { type:string, id: number }

const rootReducer = combineReducers({
    theme: themeReducer,
});

export const store = createStore(rootReducer);
export type RootState = ReturnType<typeof rootReducer>;