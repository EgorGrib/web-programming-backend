(() => {
    window.onload = () => {
        let perf = performance.getEntriesByType("navigation")[0];

        //let nodeItem = document.createElement('h5').style.display;
        const pageLoadTime = perf.loadEventStart - perf.loadEventEnd;

        //nodeItem.innerHTML = ` <strong>${Math.floor(pageLoadTime * 100) / 100} ms</strong> (client)`;

        //document.getElementById('time').append(nodeItem);
        document.getElementById('time').innerHTML += `<strong>${Math.floor(pageLoadTime)} ms</strong> (client)`;
    };
})();