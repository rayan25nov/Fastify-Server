// Optional: helper to sanitize input or set defaults
export const createUser = (data) => ({
    name: data.name,
    email: data.email,
    password: data.password,
});
