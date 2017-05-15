import ReactDOM from 'react-dom'

import App from './components/App'

const names = ["Usman", "Scott", "Meryl", "Liz", "Alex", "Darth Vader", "Sammy"]

ReactDOM.render(App({names: names}), document.getElementById('container'))
