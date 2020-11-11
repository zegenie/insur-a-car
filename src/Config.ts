export type ApplicationConfiguration = {
    backendUrl ?: string
}

const Config: ApplicationConfiguration = {
    backendUrl: process.env.REACT_APP_BACKEND_URL
};

export default Config;