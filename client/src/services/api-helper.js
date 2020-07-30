import api from './api-config';

export const getAllUsers = async () => {
  const resp = await api.get('/users');
  return resp.data;
};

export const getOneUser = async (id) => {
  const resp = await api.get(`/users/${id}`);
  return resp.data;
}

export const putUser = async (id, userData) => {
  const resp = await api.put(`/users/${id}`, { user: userData })
  return resp.data;
}

export const deleteUser = async (id) => {
  const resp = await api.delete(`/users/${id}`);
  return resp
}

export const getAllPosts = async () => {
  const resp = await api.get('/posts/new');
  return resp.data;
};

export const getOnePost = async (id) => {
  const resp = await api.get(`/posts/new${id}`);
  return resp.data;
}

export const createPost = async (postData) => {
  console.log({ post: postData })
  const resp = await api.post('/posts/new', { post: postData })
  return resp.data;
}

export const putPost = async (id, postData) => {
  const resp = await api.put(`/posts/new${id}`, { post: postData })
  return resp.data;
}

export const deletePost = async (id) => {
  const resp = await api.delete(`/posts/new${id}`);
  return resp
}


export const createComment = async (posts_id, commentData) => {
  const resp = await api.post(`/posts/new${posts_id}/comments`, { comment: commentData })
  return resp.data;
}

export const putComment = async (id, commentData) => {
  const resp = await api.put(`/posts/new/1/comments/${id}`, { comment: commentData })
  return resp.data;
}

export const deleteComment = async (id) => {
  const resp = await api.delete(`/posts/new/1/comments/${id}`);
  return resp
}