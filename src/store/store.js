import { createGlobalState } from 'react-hooks-global-state';

const default_config = {
    descriptions: {
        current_view: 'home'
    }
}

const initialState = {
    config: default_config,
    navbar_hidden: false,
    current_view: 'home',
    git_username: 'pritamprasd'
};
const { useGlobalState } = createGlobalState(initialState);
export const GlobalStateNames = {
    git_username: "git_username",
    current_view: "current_view",
    navbar_hidden: "navbar_hidden",
    config : "config"
} 

export default useGlobalState;

