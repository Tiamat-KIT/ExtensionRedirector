chrome.tabs.query({
    lastFocusedWindow: true},
    (tabs) => {
        tabs.forEach((tab) => {
            if (tab.url === 'https://www.sp.netkeiba.com/') {
                console.log('Redirecting to netkeiba.com')

            }
        })
    })

export{}