import {Provider} from 'react-redux'
import store from '../../Redux/store'

const withStore = (Props: ChildrenType) => {
    return (
        <Provider store={store}>
            <Props />
          </Provider>
    )
  }
  export default withStore