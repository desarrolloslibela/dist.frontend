const API_ROUTES = {
    AUTH: {
      LOGIN: "/api/auth/login",
      REGISTER: "/api/auth/register",
      LOGOUT: "/api/auth/logout",
    },
    USERS: {
      GET_ALL: "/api/users",
      GET_BY_ID: (id) => `/api/users/${id}`,
      UPDATE: (id) => `/api/users/${id}/update`,
      DELETE: (id) => `/api/users/${id}/delete`,
    },
    VEHICLES: {
      GET_ALL: "/api/vehicles",
      GET_BY_ID: (id) => `/api/vehicles/${id}`,
      UPDATE: (id) => `/api/vehicles/${id}/update`,
    },
    // Agrega más rutas según sea necesario
  };
  
  export default API_ROUTES;  