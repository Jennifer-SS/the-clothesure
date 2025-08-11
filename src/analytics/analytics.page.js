
const STORAGE_KEY = 'analytics_page';
const arrayChannels = ['facebook', 'instagram', 'tikTok', 'youTube', 'pinterest'];

const initLocalStorage = () => {
    const metrics = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {
        counterVisits: 0,
        counterClickButtonHero: 0,
        counterSlideSwiper: 0,
        counterViewMessages: 0,
        counterEmailSent: 0,
        counterViewEndPage: 0,
        channels: {
            facebook: 0,
            instagram: 0,
            tikTok: 0,
            youTube: 0,
            pinterest: 0
        }

    };

    if (!metrics) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(metrics));
    }

    return metrics;
}

const setValueMetric = (ref, metricName) => {

    if (window.location.pathname === "/admin") return;
    const metrics = initLocalStorage();

    if (ref.current) return;
    ref.current = true;

    metrics[metricName] = metrics[metricName] + 1;

    if (metricName === "counterVisits") {
        const channel = randomChannel();
        metrics.channels[channel] += 1;
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(metrics))
}

const randomChannel = () => {
    const index = Math.floor(Math.random() * 5);
    return arrayChannels[index];
}

const setPercentageViewPage = (ref) => {

    const metrics = initLocalStorage();
    if (ref.current) return;

    // Operations
    const totalHeightPage = document.documentElement.scrollHeight - 10;
    const scrollPosition = window.scrollY + window.innerHeight;

    if (scrollPosition >= totalHeightPage) {
        ref.current = true;

        metrics.counterViewEndPage += 1;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(metrics));
    }
}

export {
    setValueMetric,
    setPercentageViewPage,
    initLocalStorage
}