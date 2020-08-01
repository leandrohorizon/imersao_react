const URL = window.location.hostname.includes('localhost')
    ? 'https://nexflit.herokuapp.com'
    : 'http://localhost:8081';

export default {
    URL,
}