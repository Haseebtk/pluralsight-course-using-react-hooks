const speakersReducer = (state, action) => {
  function updateFavorite(favoriteValue) {
    return state.data.map((item) => {
      if (item.id === action.sessionId) {
        item.favorite = favoriteValue;
      }
      return item;
    });
  }

  switch (action.type) {
    case 'setSpeakerList':
      return { ...state, isLoading: false, speakerList: action.payload };
    case 'favorite': {
      const newData = updateFavorite(true);
      return [...state, { speakerList: newData }];
    }
    case 'unfavorite': {
      const newData = updateFavorite(false);
      return [...state, { speakerList: newData }];
    }
    default:
      return [...state];
  }
};

export default speakersReducer;