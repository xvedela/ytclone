import { createStore } from 'vuex'
import YoutubePlugin from '../plugins/YoutubePlugin'


export default createStore({
  plugins: [YoutubePlugin]

})