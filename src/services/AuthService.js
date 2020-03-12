import store from '../store';

export function isLoggedIn() {
    const token = localStorage.getItem('token');
    if (token == null){
        console.log("is not logged in!");
        //TODO: for testing purpose set to true
        return true;
    } else {
        console.log("is logged in!");
        return true;
    }
}

export function login() {
    //fake token at the moment
    const token = {
        username: 'hans'
    };
    setToken(token);
}

export function setToken(token) {
    localStorage.setItem('token', JSON.stringify(token));
    store.dispatch('authenticate')
        .then(res => console.log("Token set for authentication!"));
}

export function getUsername() {
    return 'hans';
}

export function getUserid() {
    return 1;
}

export function logout() {
    localStorage.clear();
    store.dispatch('authenticate');
}

