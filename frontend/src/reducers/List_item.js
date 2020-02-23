import {item_Actions} from '../constants/Item'
import {item_Status} from '../constants/Item'
 const item_initialState = {
    item_status: item_Actions.item_Create.NEW

  };

  export default function (state = item_initialState, action) {
   console.log(action.type);
    switch(action.type) {

      case item_Actions.item_Create.NEW:// start fetching posts and set loading = true
        console.log("I am from Reduce new item");
        return { ...state, item_status: item_Status.item_Create.NEW};

        default:
      console.log("default is firing")

        return {...state};

    }
  };
