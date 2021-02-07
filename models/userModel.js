import AsyncStorage from '@react-native-async-storage/async-storage';

export const user = {

  state: {
    name: '',
  },

  reducers: {                               
    setName(state, { name }) {
      return { ...state, name };
    },
  },

  effects: (dispatch) => ({

    async storeName(payload) {

      const { name } = payload;

      if (name !== '') {      //si le nom a été défini

        // ajout du nom dans l'asyncstorage
        await AsyncStorage.setItem('name', name);
        
        // ajout du nom dans le state
        const action = {
          type: "user/setName",
          payload: { name }
        };
        dispatch(action);

      }
    }
  }),
};