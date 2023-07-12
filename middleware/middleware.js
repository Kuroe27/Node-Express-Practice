
import moment from 'moment/moment.js';
const request = (req, res, next) => {
    console.log(req.url)
    console.log(req.protocol)
    console.log(req.get('host'))
    console.log(req.originalUrl)
    console.log(moment().format())
    next()
}
export default request