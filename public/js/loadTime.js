(() => {
    window.onload = () => {
        let perf = performance.getEntriesByType("navigation")[0];

        const pageLoadTime = perf.loadEventStart - perf.loadEventEnd;
        document.getElementById('time').innerHTML += `<strong>${Math.floor(pageLoadTime)} ms</strong> (client)`;
    };
})();