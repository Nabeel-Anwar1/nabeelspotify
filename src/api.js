import axios from "axios";

const gamesApi = axios.create({
  baseURL: "https://ncgames-8sfn.onrender.com/api/",
});

export const fetchReviews = (category, sort_by, order) => {
  if (category === "all") {
    return gamesApi
      .get(`/reviews`, { params: { sort_by, order } })
      .then((response) => {
        return response.data.reviews;
      });
  } else {
    return gamesApi
      .get(`/reviews`, { params: { category, sort_by, order } })
      .then((response) => {
        return response.data.reviews;
      });
  }
};

export const fetchSingleReview = (id) => {
  return gamesApi.get(`/reviews/${id}`).then((response) => {
    return response.data.review;
  });
};

export const patchVotes = (id, votes) => {
  return gamesApi.patch(`/reviews/${id}`, votes).then((response) => {
    return response.data.reviews;
  });
};

export const fetchComments = (id) => {
  return gamesApi.get(`/reviews/${id}/comments`).then((response) => {
    return response.data.comments;
  });
};

export const postComment = (id, username, body) => {
  return gamesApi
    .post(`/reviews/${id}/comments`, { username, body })
    .then((response) => {
      return response.data.comment;
    });
};

export const deleteComment = (id) => {
  return gamesApi.delete(`/comments/${id}`).catch((err) => {
    return err;
  });
};
