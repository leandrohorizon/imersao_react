const URL = window.location.hostname.includes('localhost')
    ? 'http://localhost:8081'
    : '';

export default {
    URL,
}