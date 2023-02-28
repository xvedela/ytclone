import { createStore } from 'vuex'
import youtubePlugin from './plugins/ytbe'



export default createStore({
  plugins: [youtubePlugin]

})