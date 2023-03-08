const config = {
    screens:{
        SignIn:{
            path: 'signin'
        },
        SignUp:{
            path: 'signup'
        },
        Home:{
            path: 'home'
        },
    }
}
const linking = {
    prefixes: ['http://deeplinkamazon/'],
    config,
}
export default linking;