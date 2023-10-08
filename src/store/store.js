import { createGlobalState } from 'react-hooks-global-state';

const initialState = {    
    git_username: 'pritamprasd'
};

const { useGlobalState } = createGlobalState(initialState);
export const GlobalStateNames = {
    git_username: "git_username",
} 

export default useGlobalState;

