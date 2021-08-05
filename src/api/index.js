import axios from '@/utils/axios.js';
const fetchTopic = params=>axios({method:'get',url:'/topics',params})
export {
    fetchTopic
}