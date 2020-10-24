const defaultParams = {
    classification_id: 5,
    device_identifier: "web",
    locale: "es",
    market_code: "es"
};

const apiClient = {
    call(endpoint = "", params = defaultParams) {
        // const { base_url: baseUrl } = config;
        let url = new URL(endpoint, process.env.API_BASE_URL);
        if (params) {
            Object.keys(params).forEach((key) =>
                url.searchParams.append(key, params[key])
            );
        }
        return window
            .fetch(url)
            .then(async (response) => {
                const data = await response.json();
                if (response.ok) {
                    return data;
                } else {
                    return Promise.reject(data);
                }
            })
            .catch((e) => {
                console.error(`Error:`, e);
            });
    }
};

export default apiClient;
