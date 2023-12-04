const reviewReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_REVIEW':
      return [...state, action.payload];
    case 'DELETE_REVIEW':
      return state.filter((review) => review.id !== action.payload);
    case 'EDIT_REVIEW':
      return state.map((review) =>
        review.id === action.payload.id ? { ...review, ...action.payload } : review
      );
    default:
      return state;
  }
};

export default reviewReducer;
