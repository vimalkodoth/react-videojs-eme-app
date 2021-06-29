const defaultParams = {
    classification_id: 5,
    device_identifier: "web",
    locale: "es",
    market_code: "es"
};

const apiClient = {
    async call(endpoint = "", params = defaultParams) {
        let url = new URL(endpoint, process.env.API_BASE_URL);
        if (params) {
            Object.keys(params).forEach((key) =>
                url.searchParams.append(key, params[key])
            );
        }
        const response = await fetch(url);
        const json = await response.json();
        if(response.ok){
            return json;
        }
        return Promise.reject(data);
    }
};

export default apiClient;
