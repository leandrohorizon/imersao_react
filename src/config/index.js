const URL = window.location.hostname.includes('localhost')
    ? 'http://localhost:8081'
    : 'https://nexflit.herokuapp.com';

export default {
    URL,
}